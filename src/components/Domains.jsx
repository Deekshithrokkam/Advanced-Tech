import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Bot, Wifi, ArrowRight } from 'lucide-react'

const DOMAINS = [
  {
    icon: Bot,
    label: 'Domain 01',
    title: 'Robotics',
    subtitle: 'Building Intelligent Machines',
    description:
      'Design, build, and program autonomous robots and automation systems. From servo-driven arms to obstacle-navigating bots, we tackle real engineering challenges.',
    features: [
      'Autonomous Navigation',
      'Embedded Programming',
      'Mechanical Design & CAD',
      'Computer Vision',
      'ROS Framework',
    ],
    color: '#DC2626',
  },
  {
    icon: Wifi,
    label: 'Domain 02',
    title: 'Internet of Things',
    subtitle: 'Connecting the Physical World',
    description:
      'Create intelligent sensor networks, cloud-connected devices, and smart systems that bridge the physical and digital world for real-world applications.',
    features: [
      'ESP32 & Raspberry Pi',
      'MQTT & Cloud Integration',
      'Sensor Fusion',
      'Real-Time Dashboards',
      'Edge Computing',
    ],
    color: '#991B1B',
  },
]

// Decorative tech grid for card backgrounds
const TechGrid = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
    {Array.from({ length: 7 }).map((_, i) => (
      <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="300" stroke={color} strokeWidth="0.5" />
    ))}
    {Array.from({ length: 6 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke={color} strokeWidth="0.5" />
    ))}
    {[[60, 60], [180, 120], [300, 60], [120, 180], [240, 240], [360, 180]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3" fill={color} />
    ))}
  </svg>
)

export default function Domains() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="domains" className="relative section-padding overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090B 0%, #0f0f10 50%, #09090B 100%)' }}
    >
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
            Our Domains
            <span className="w-4 h-px bg-red-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Two pillars of{' '}
            <span className="text-red-600">innovation</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
            Our technical focus spans two of the most transformative fields in modern engineering.
          </p>
        </motion.div>

        {/* Domain cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {DOMAINS.map(({ icon: Icon, label, title, subtitle, description, features, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-3xl p-8 overflow-hidden cursor-default transition-all duration-500"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              whileHover={{ y: -4 }}
            >
              {/* Grid bg */}
              <TechGrid color={color} />

              {/* Top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${color}80, ${color}, ${color}40)` }}
              />

              {/* Red glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
                style={{ boxShadow: `0 0 80px ${color}20, inset 0 0 40px ${color}08` }}
              />

              {/* Icon + label */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <span
                  className="text-xs font-mono tracking-widest font-medium"
                  style={{ color: `${color}80` }}
                >
                  {label}
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10 mb-4">
                <h3 className="text-3xl font-black text-white mb-1">{title}</h3>
                <p className="text-sm font-medium" style={{ color }}>{subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-500 leading-relaxed mb-6 relative z-10">
                {description}
              </p>

              {/* Features */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {features.map(f => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300"
                    style={{
                      background: `${color}0f`,
                      border: `1px solid ${color}20`,
                      color: `${color}cc`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Learn more */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.04]">
                <button
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color }}
                >
                  Explore workshops
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
