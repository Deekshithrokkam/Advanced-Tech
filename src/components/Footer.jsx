import { motion } from 'framer-motion'
import { Mail, Instagram, ArrowUpRight, Zap } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../utils/constants'

const ATCLogo = () => (
  <div className="flex items-center gap-3">
    <img
      src="/atc-logo.jpg"
      alt="Advanced Tech Club"
      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      style={{ filter: 'drop-shadow(0 0 8px rgba(220,38,38,0.4))' }}
    />
    <div>
      <div className="text-sm font-bold text-white">Advanced Tech Club</div>
      <div className="flex items-center gap-1.5 mt-0.5">
        <img
          src="/niat-logo.png"
          alt="NIAT"
          className="w-4 h-4 object-contain opacity-70"
        />
        <div className="text-[10px] text-zinc-600 uppercase tracking-wider">NxtWave NIAT</div>
      </div>
    </div>
  </div>
)

const handleNav = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()
  const emailSubject = encodeURIComponent(CONTACT.emailSubject)
  const emailBody = encodeURIComponent(CONTACT.emailBody)
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${emailSubject}&body=${emailBody}`

  return (
    <footer className="relative bg-zinc-950 overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <ATCLogo />
            <p className="text-sm text-zinc-600 mt-5 leading-relaxed max-w-xs">
              A student-led Robotics & IoT innovation community at NxtWave Institute of Advanced Technologies, Hyderabad.
            </p>
            <div className="flex gap-3 mt-6">
              <motion.a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-600 hover:text-red-500 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(220,38,38,0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={15} />
              </motion.a>
              <motion.a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-zinc-600 hover:text-red-500 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(220,38,38,0.3)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-sm text-zinc-600 hover:text-white transition-colors animated-underline focus-ring"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More + Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-zinc-500 mb-5">Contact</h4>
            <div className="space-y-4">
              <div>
                <div className="text-[10px] text-zinc-700 mb-1 uppercase tracking-wider">Email</div>
                <a
                  href={gmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-red-400 transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <div className="text-[10px] text-zinc-700 mb-1 uppercase tracking-wider">Institution</div>
                <p className="text-xs text-zinc-500">
                  NxtWave Institute of<br />Advanced Technologies
                </p>
              </div>
            </div>

            {/* CTA chip */}
            <motion.button
              onClick={() => handleNav('#contact')}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-400 transition-colors px-3 py-2 rounded-lg"
              style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.15)' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Zap size={11} />
              Join ATC Today
              <ArrowUpRight size={11} />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            © {year} Advanced Tech Club — NxtWave Institute of Advanced Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-zinc-700">
            <span>Built with</span>
            <span className="text-red-600">♥</span>
            <span>by ATC members</span>
          </div>
        </div>
      </div>

      {/* Bottom corner circuit deco */}
      <svg
        className="absolute bottom-0 right-0 w-48 h-32 opacity-[0.04] pointer-events-none"
        viewBox="0 0 192 128"
        fill="none"
      >
        <path d="M192 64 H140 L120 44 H80 L60 64 H0" stroke="#DC2626" strokeWidth="1" />
        <path d="M96 0 V44 M60 64 V128 M120 44 V0" stroke="#DC2626" strokeWidth="0.5" />
        {[[140,64],[80,44],[60,64]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#DC2626" />
        ))}
      </svg>
    </footer>
  )
}
