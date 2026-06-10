import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Wrench, BrainCircuit, Handshake, Star } from 'lucide-react'

const CARDS = [
  {
    icon: Wrench,
    title: 'Hands-On Learning',
    description:
      'Get your hands on real hardware: microcontrollers, sensors, servo motors, and PCBs. Every concept is backed by a working prototype.',
    accent: 'Build. Break. Learn.',
  },
  {
    icon: BrainCircuit,
    title: 'Industry-Relevant Skills',
    description:
      'Master the tools that matter — embedded C, Python, MQTT, ROS, CAD design, and cloud IoT platforms used in the real industry.',
    accent: 'Skills that hire.',
  },
  {
    icon: Handshake,
    title: 'Innovation & Collaboration',
    description:
      'Work in cross-functional teams, pitch ideas in ideathons, and co-build projects that solve problems beyond the classroom.',
    accent: 'Ideas meet execution.',
  },
  {
    icon: Star,
    title: 'Leadership Opportunities',
    description:
      'Lead workshops, head projects, represent ATC at events. The club is a fast track for developing confidence and technical authority.',
    accent: 'Your platform to lead.',
  },
]

export default function WhyJoin() {
  const [ref, visible] = useScrollReveal()

  return (
    <section className="relative section-padding bg-zinc-950 overflow-hidden">
      {/* Glow backdrop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(220,38,38,0.04)' }}
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
            Why Join Us
            <span className="w-4 h-px bg-red-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Everything you need to{' '}
            <span className="text-red-600">excel</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-base">
            ATC gives you the resources, the community, and the environment to grow from curious student to confident engineer.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(({ icon: Icon, title, description, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-2xl p-6 cursor-default transition-all duration-500 hover:border-red-600/30 overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Hover red glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: 'inset 0 0 40px rgba(220,38,38,0.08), 0 0 40px rgba(220,38,38,0.12)' }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/0 to-transparent group-hover:via-red-600/60 transition-all duration-500" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-5 group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                <Icon size={22} className="text-red-500" />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                {description}
              </p>

              {/* Accent footer */}
              <div className="text-xs font-semibold text-red-600/70 group-hover:text-red-500 transition-colors tracking-wide">
                {accent}
              </div>

              {/* Corner decoration */}
              <svg className="absolute bottom-3 right-3 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity" viewBox="0 0 48 48" fill="none">
                <path d="M48 24 H32 L24 32 V48" stroke="#DC2626" strokeWidth="1" />
                <circle cx="32" cy="24" r="2" fill="#DC2626" />
                <circle cx="24" cy="32" r="2" fill="#DC2626" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
