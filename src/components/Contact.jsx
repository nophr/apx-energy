import { useState } from 'react'
import { Mail, Globe, MapPin, CircleCheck } from 'lucide-react'
import Logo from './Logo'

const certs = ['IEC Member', 'IEEE Member', 'CE', 'CQC', 'SGS', 'CNAS']

const footerLinks = [
  ['About', '#about'],
  ['Technology Partner', '#sanhe'],
  ['Solutions', '#solutions'],
  ['Projects', '#projects'],
  ['Why APX', '#why-apx'],
  ['Contact', '#contact'],
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email, and message.')
      return
    }
    setError('')
    // TODO: wire to third-party service (e.g. Formspree, EmailJS, Resend)
    console.log('Form submission:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white flex flex-col">
      {/* Contact content — grows to fill the white area above the footer */}
      <div className="flex-1 flex items-center py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                Let's Build Your Energy Future
              </h2>
              <p className="text-ink-700 text-base leading-relaxed mb-8">
                Whether you're exploring a rooftop solar installation or scoping a utility-scale
                project, our team is ready to discuss your requirements and provide a tailored
                energy solution.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:enquiry@apxenergygroup.com"
                  className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0"><Mail className="w-5 h-5" strokeWidth={1.75} /></span>
                  enquiry@apxenergygroup.com
                </a>
                <a
                  href="https://www.apxenergygroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0"><Globe className="w-5 h-5" strokeWidth={1.75} /></span>
                  www.apxenergygroup.com
                </a>
                <div className="flex items-center gap-3 text-sm font-semibold text-ink-700">
                  <span className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" strokeWidth={1.75} /></span>
                  Australia · Cambodia · Vietnam
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mx-auto mb-4">
                    <CircleCheck className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-brand-950 font-extrabold text-xl mb-2">Message Received</h3>
                  <p className="text-ink-700 text-sm leading-relaxed">
                    Thank you for reaching out. A member of our team will be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">
                        Full Name <span className="text-brand-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-ink-700 placeholder-ink-400 focus:outline-none focus:border-brand-700 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">
                        Email Address <span className="text-brand-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-ink-700 placeholder-ink-400 focus:outline-none focus:border-brand-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-ink-700 placeholder-ink-400 focus:outline-none focus:border-brand-700 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">Country</label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full bg-white border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-ink-700 focus:outline-none focus:border-brand-700 transition-colors"
                      >
                        <option value="">Select country</option>
                        <option>Australia</option>
                        <option>Cambodia</option>
                        <option>Vietnam</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-700 mb-1.5">
                      Message <span className="text-brand-700">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project or enquiry..."
                      className="w-full bg-white border border-brand-200 rounded-xl px-4 py-2.5 text-sm text-ink-700 placeholder-ink-400 focus:outline-none focus:border-brand-700 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-xs font-semibold">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer band — same dark colour, pinned to the bottom of the section */}
      <footer className="bg-brand-950 text-brand-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <div className="sm:col-span-1">
              <Logo className="h-12 w-auto mb-4" textColor="#ffffff" />
              <p className="text-sm leading-relaxed text-brand-400/80 max-w-xs">
                Authorised sole international distributor for Sanhe Power Tech (Shenzhen) Co., Ltd.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:enquiry@apxenergygroup.com" className="hover:text-white transition-colors break-all">
                    enquiry@apxenergygroup.com
                  </a>
                </li>
                <li>
                  <a href="https://www.apxenergygroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.apxenergygroup.com
                  </a>
                </li>
                <li className="text-brand-400/70">Australia · Cambodia · Vietnam</li>
              </ul>
            </div>
          </div>

          {/* Certs */}
          <div className="border-t border-white/10 pt-8 mb-6">
            <div className="flex flex-wrap gap-2">
              {certs.map(c => (
                <span key={c} className="border border-white/15 text-white/50 text-xs px-3 py-1 rounded-full">
                  {c}
                </span>
              ))}
              <span className="border border-white/15 text-white/50 text-xs px-3 py-1 rounded-full">
                100+ Patents & Standards
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-brand-400/60">
            <p>© 2026 APX Energy Solutions · All rights reserved.</p>
            <p>Technology Partner: Sanhe Power Tech (Shenzhen) Co., Ltd.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
