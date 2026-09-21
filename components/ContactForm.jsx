import React, { useState } from 'react';
import { X } from 'lucide-react';

const BLUE = '#3B60E4';
const BLUE_DEEP = '#2F4FC9';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const GREEN = '#1E8E5A';

// Web3Forms delivers submissions straight to info@seco.bio. The key is public
// by design — it ships in the client bundle, and it only grants the right to
// send to the address it was issued for. Set it in Netlify under
// Site configuration -> Environment variables. Without it the form fails into
// its error state, which points people at info@seco.bio directly.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm({ onClose, initialType, initialMessage }) {
  const [form, setForm] = useState({
    type: initialType || 'Partnership',
    email: '',
    message: initialMessage || ''
  });
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      console.error('NEXT_PUBLIC_WEB3FORMS_KEY is not set — the contact form cannot send.');
      setState('error');
      return;
    }

    setState('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Seco website — ${form.type}`,
          from_name: 'Seco Bio website',
          // So replying in the inbox goes back to the sender, not to us.
          replyto: form.email,
          type: form.type,
          email: form.email,
          message: form.message,
          botcheck: form.botcheck || ''
        })
      });
      // A 200 alone isn't success here — the API reports failures in the body.
      const data = await res.json().catch(() => ({}));
      if (!data.success) {
        console.error('Contact form rejected:', res.status, data);
      }
      setState(data.success ? 'done' : 'error');
    } catch (err) {
      console.error('Contact form failed to send:', err);
      setState('error');
    }
  };

  const field = {
    width: '100%',
    padding: '13px 15px',
    borderRadius: 10,
    border: '1px solid #DCE3F7',
    color: SLATE,
    fontSize: 15,
    backgroundColor: '#fff'
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(20,28,40,0.55)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-10 relative"
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6"
          style={{ color: MUTED }}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {state === 'done' ? (
          <div className="text-center py-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#E1F4EE' }}
            >
              <span style={{ color: GREEN, fontSize: 26 }}>✓</span>
            </div>
            <h2 className="font-bold mb-3" style={{ color: SLATE, fontSize: 22 }}>
              Thanks — we'll come back to you.
            </h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
              Within two business days.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-7 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)` }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-bold mb-8" style={{ color: SLATE, fontSize: 24, letterSpacing: '-0.02em' }}>
              Let's talk.
            </h2>

            <form onSubmit={submit} className="space-y-5">
              {/* Honeypot: hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="botcheck"
                onChange={change}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  I'm reaching out about
                </label>
                <select name="type" value={form.type} onChange={change} style={field}>
                  <option>Partnership</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="you@company.com"
                  style={field}
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  Anything else
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={change}
                  placeholder="Optional."
                  style={{ ...field, resize: 'none' }}
                />
              </div>

              {state === 'error' && (
                <p style={{ color: '#B4232B', fontSize: 14 }}>
                  Something went wrong. Email{' '}
                  <a href="mailto:info@seco.bio" style={{ textDecoration: 'underline' }}>
                    info@seco.bio
                  </a>{' '}
                  directly and we'll pick it up.
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full py-3.5 rounded-full text-white font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`,
                  opacity: state === 'sending' ? 0.65 : 1,
                  fontSize: 15
                }}
              >
                {state === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
