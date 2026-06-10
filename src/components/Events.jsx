import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Calendar, Tag, ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import { UPCOMING_EVENTS, PAST_EVENTS } from '../utils/constants'

const CATEGORY_COLORS = {
  Competition: '#DC2626',
  Workshop: '#B91C1C',
  Hackathon: '#991B1B',
  Orientation: '#7F1D1D',
}

function EventCard({ event, index, visible }) {
  const isUpcoming = event.tag === 'Upcoming'
  const catColor = CATEGORY_COLORS[event.category] ?? '#DC2626'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group glass rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      whileHover={{ borderColor: 'rgba(220,38,38,0.2)' }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: '0 0 50px rgba(220,38,38,0.08)' }} />

      {/* Left accent bar */}
      <div
        className="absolute top-4 bottom-4 left-0 w-0.5 rounded-full"
        style={{ background: `linear-gradient(180deg, ${catColor}, transparent)` }}
      />

      {/* Tag + Category */}
      <div className="flex items-center gap-2 mb-4 pl-2">
        <span
          className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: `${catColor}15`, color: catColor, border: `1px solid ${catColor}20` }}
        >
          {event.category}
        </span>
        {isUpcoming ? (
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
            <Clock size={10} /> Upcoming
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[10px] text-zinc-500 font-medium">
            <CheckCircle2 size={10} /> Completed
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 pl-2 group-hover:text-red-100 transition-colors">
        {event.name}
      </h3>

      {/* Date */}
      <div className="flex items-center gap-1.5 text-zinc-500 text-xs mb-4 pl-2">
        <Calendar size={11} />
        {event.date}
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-500 leading-relaxed mb-5 pl-2">
        {event.description}
      </p>

      {/* CTA */}
      {isUpcoming && event.registrationLink && (
        <div className="pl-2">
          <motion.a
            href={event.registrationLink}
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-500 hover:text-red-400 transition-colors"
            whileHover={{ x: 3 }}
          >
            Register Now
            <ExternalLink size={11} />
          </motion.a>
        </div>
      )}
    </motion.div>
  )
}

export default function Events() {
  const [tab, setTab] = useState('upcoming')
  const [ref, visible] = useScrollReveal()
  const events = tab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS

  return (
    <section id="events" className="relative section-padding bg-zinc-950 overflow-hidden">
      {/* Decorative radial */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(220,38,38,0.04)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label justify-center mb-4 block">
            <span className="w-4 h-px bg-red-600" />
            Events & Workshops
            <span className="w-4 h-px bg-red-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Where learning{' '}
            <span className="text-red-600">happens</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            Hands-on workshops, competitive challenges, and community hackathons — there's always something building at ATC.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1 flex gap-1" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {['upcoming', 'past'].map(t => (
              <motion.button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  tab === t ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {tab === t && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full bg-red-600"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t === 'upcoming' ? 'Upcoming' : 'Past Events'}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {events.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} visible={visible} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-zinc-600 text-sm mb-4">
            Want to be notified about future events?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
