import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Users, Target, Lightbulb, Trophy } from 'lucide-react'

const stats = [
  { icon: Users,     value: '200+', label: 'Members'       },
  { icon: Target,    value: '15+',  label: 'Workshops'     },
  { icon: Lightbulb, value: '8+',   label: 'Projects'      },
  { icon: Trophy,    value: '3+',   label: 'Awards'        },
]

const pillars = [
  { title: 'Practical Focus',    desc: 'Real hardware, real code, real solutions — not just theory.'                  },
  { title: 'Community-Driven',   desc: 'Peer learning, mentorship, and collaboration at every level.'                },
  { title: 'Industry-Aligned',   desc: 'Skills aligned with what robotics & IoT companies actually need.'            },
]

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" className="relative section-padding bg-zinc-950 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 circuit-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Two-column split */}
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left: visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="glass rounded-2xl p-8 relative overflow-hidden glow-red">
              {/* Red accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600/50 via-red-500 to-transparent" />

              {/* Circuit decoration */}
              <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10" viewBox="0 0 160 160" fill="none">
                <path d="M160 80 H120 L100 100 H60 L40 80 H0" stroke="#DC2626" strokeWidth="1" />
                <path d="M80 160 V120 L100 100" stroke="#DC2626" strokeWidth="1" />
                {[40, 60, 100, 120].map((v, i) => (
                  <circle key={i} cx={v < 80 ? v : 160 - v} cy={v < 80 ? 80 : 160 - (v - 80)} r="3" fill="#DC2626" />
                ))}
              </svg>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {stats.map(({ icon: Icon, value, label }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                      <Icon size={15} className="text-red-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{value}</div>
                      <div className="text-xs text-zinc-500 font-medium">{label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />

              {/* Pillars */}
              <div className="flex flex-col gap-4">
                {pillars.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -15 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.1 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 glass-red rounded-2xl px-4 py-3 border border-red-600/20 flex items-center gap-3"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/niat-logo.png" alt="NIAT" className="w-8 h-8 object-contain opacity-80" />
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Est. 2024</div>
                <div className="text-[10px] text-zinc-500">NIAT — Hyderabad</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label mb-5 block">
              <span className="w-4 h-px bg-red-600" />
              About the Club
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1]">
              About{' '}
              <span className="text-red-600">Advanced</span>
              <br />Tech Club
            </h2>

            <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
              <p>
                Advanced Tech Club is a student-led innovation community at NIAT focused
                on Robotics and IoT. We are a space where curiosity becomes capability,
                and prototypes become products.
              </p>
              <p>
                We empower students through practical learning, technical workshops,
                collaborative projects, and real-world problem solving — bridging the
                gap between classroom theory and industry practice.
              </p>
              <p>
                From building autonomous robots to designing sensor networks that talk
                to the cloud, ATC is where the next generation of engineers take their
                first real steps.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Become a Member
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-zinc-400 hover:text-red-400 transition-colors font-medium animated-underline"
                whileHover={{ x: 3 }}
              >
                Explore Domains →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
