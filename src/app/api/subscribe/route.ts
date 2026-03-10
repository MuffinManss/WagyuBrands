import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = (body?.email ?? '').trim().toLowerCase()

    // ── Validation ────────────────────────────────────────────
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (email.length > 254) {
      return NextResponse.json({ error: 'Email address is too long.' }, { status: 400 })
    }

    // ── Supabase ──────────────────────────────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      if (process.env.NODE_ENV === 'production') {
        console.error('Supabase env vars not set in production — signup unavailable.')
        return NextResponse.json(
          { error: 'Signup is temporarily unavailable. Please try again later.' },
          { status: 503 }
        )
      }
      // In dev without Supabase configured, return success for local testing
      console.warn('Supabase env vars not set — subscriber not saved.')
      return NextResponse.json({ success: true, message: 'Welcome to the herd! 🐄' })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const source = (body?.source as string) || 'website'

    const { error } = await supabase
      .from('subscribers')
      .insert({ email, source })

    if (error) {
      // Unique constraint violation = already subscribed
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'You\'re already on the list! 🌸 We\'ll see you soon.' },
          { status: 409 }
        )
      }
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again in a moment.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Welcome to the herd! 🐄✨' })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
