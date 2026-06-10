import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { TEAM } from '../utils/constants'

// Color each role uniquely within the red palette
const ROLE_COLORS = {
  'President':              { bg: 'rgba(220,38,38,0.15)',  border: 'rgba(220,38,38,0.35)',  text: '#DC2626' },
  'Vice President':         { bg: 'rgba(185,28,28,0.12)',  border: 'rgba(185,28,28,0.3)',   text: '#B91C1C' },
  'Operations Head':        { bg: 'rgba(153,27,27,0.12)',  border: 'rgba(153,27,27,0.3)',   text: '#991B1B' },
  'Finance Head':           { bg: 'rgba(127,29,29,0.12)',  border: 'rgba(127,29,29,0.3)',   text: '#9B1C1C' },
  'Outreach Head':          { bg: 'rgba(185,28,28,0.12)',  border: 'rgba(185,28,28,0.3)',   text: '#B91C1C' },
  'Creative & Design Head': { bg: 'rgba(220,38,38,0.12)',  border: 'rgba(220,38,38,0.28)',  text: '#DC2626' },
  'Social Media Head':      { bg: 'rgba(153,27,27,0.12)',  border: 'rgba(153,27,27,0.3)',   text: '#991B1B' },
}

function MemberCard({ member, index, visible }) {
  const rc = ROLE_COLORS[member.role] ?? ROLE_COLORS['Operations Head']

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.28, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-400 cursor-default"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{
        y: -8,
        borderColor: rc.border,
        boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(220,38,38,0.1)`,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${rc.text}60, transparent)` }}
      />

      {/* Background circuit deco */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 200 240" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M0 120 H60 L80 100 H120 L140 120 H200" stroke="#DC2626" strokeWidth="0.8" />
        <path d="M100 0 V60 L120 80 V160 L100 180 V240" stroke="#DC2626" strokeWidth="0.8" />
        <circle cx="60" cy="120" r="3" fill="#DC2626" />
        <circle cx="140" cy="120" r="3" fill="#DC2626" />
        <circle cx="100" cy="60" r="3" fill="#DC2626" />
        <circle cx="100" cy="180" r="3" fill="#DC2626" />
      </svg>

      {/* Avatar */}
      <motion.div
        className="relative w-20 h-20 rounded-full flex items-center justify-center mb-4 text-xl font-black tracking-wide flex-shrink-0"
        style={{ background: rc.bg, border: `2px solid ${rc.border}`, color: rc.text }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {member.initials}
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 20px ${rc.text}40, 0 0 40px ${rc.text}20` }}
        />
      </motion.div>

      {/* Name */}
      <h3 className="text-base font-bold text-white mb-1.5">{member.name}</h3>

      {/* Role badge */}
      <span
        className="text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
        style={{ background: rc.bg, border: `1px solid ${rc.border}`, color: rc.text }}
      >
        {member.role}
      </span>

      {/* Bio */}
      <p className="text-xs text-zinc-600 leading-relaxed group-hover:text-zinc-500 transition-colors">
        {member.bio}
      </p>
    </motion.div>
  )
}

export default function Leadership() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="leadership" className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090B 0%, #0f0f0f 50%, #09090B 100%)' }}
    >
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'rgba(220,38,38,0.035)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label justify-center mb-4 block">
            <span className="w-4 h-px bg-red-600" />
            Leadership Team
            <span className="w-4 h-px bg-red-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The people{' '}
            <span className="text-red-600">driving</span> ATC
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            A team of passionate students committed to building a premier innovation community at NIAT.
          </p>
        </motion.div>

        {/* Team grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} visible={visible} />
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl px-8 py-5"
            style={{ border: '1px solid rgba(220,38,38,0.15)' }}
          >
            <p className="text-zinc-400 text-sm">
              Interested in joining the leadership team next cycle?
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-xs whitespace-nowrap"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Involved
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
