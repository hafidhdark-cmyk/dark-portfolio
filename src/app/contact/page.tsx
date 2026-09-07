'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xjyvabdv', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main style={{ padding: '48px', maxWidth: '560px', margin: '0 auto', fontFamily: 'var(--font-body)', color: 'var(--text)' }}>

      <p style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
        Contact
      </p>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 400, marginBottom: '12px' }}>
        Let's work together
      </h1>

      <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '40px', lineHeight: 1.7 }}>
        I respond the same day. A landing page goes from brief to deployed in under a week. Email me directly at hafidhdark@gmail.com or use the form below.
      </p>

      {status === 'success' ? (
        <div style={{ padding: '24px', background: 'var(--bg2)', borderRadius: '8px', color: 'var(--text)' }}>
          <p style={{ fontSize: '16px', marginBottom: '8px' }}>Message received.</p>
          <p style={{ fontSize: '14px', color: 'var(--muted)' }}>I'll get back to you today.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              style={{ background: 'var(--bg2)', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '12px 16px', color: 'var(--text)', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              style={{ background: 'var(--bg2)', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '12px 16px', color: 'var(--text)', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              style={{ background: 'var(--bg2)', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '12px 16px', color: 'var(--text)', fontSize: '15px', outline: 'none', fontFamily: 'var(--font-body)', resize: 'vertical' }}
            />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: '14px', color: '#f87171' }}>Something went wrong. Try emailing me directly at hafidhdark@gmail.com</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{ background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '8px', padding: '14px 24px', fontSize: '15px', fontWeight: 500, cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1, fontFamily: 'var(--font-body)' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>

        </form>
      )}

    </main>
  )
}