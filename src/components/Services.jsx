import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'BRIEFING',
    text: 'We start by understanding the problem, not the solution — goals, constraints, users, and the real reason this project exists.',
  },
  {
    number: '02',
    title: 'ANALYTICS',
    text: 'Research and data shape the direction: competitor audits, user interviews, and a clear view of where the opportunity actually lives.',
  },
  {
    number: '03',
    title: 'PROTOTYPING',
    text: 'Low-fidelity flows and wireframes let us test structure fast, before a single pixel is polished.',
  },
  {
    number: '04',
    title: 'DESIGN',
    text: 'Visual language, components, and motion come together into a system that feels considered and consistent end to end.',
  },
  {
    number: '05',
    title: 'ADAPTIVE',
    text: 'Every screen is stress-tested across breakpoints and devices, so the experience holds up everywhere it lives.',
  },
  {
    number: '06',
    title: 'THE FINAL',
    text: 'Handoff, QA, and launch — with documentation that keeps the system usable long after I step away.',
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="font-display font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl text-center mb-20 leading-[0.95]"
        >
          <span className="text-white">STAGES OF WEBSITE </span>
          <span className="text-stroke">DEVELOPMENT</span>
        </motion.h2>

        <div className="border-t border-white/10">
          {stages.map((stage, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="text-sm font-semibold text-gray-500 tabular-nums">
                      {stage.number}
                    </span>
                    <span
                      className={`font-display font-bold text-2xl sm:text-4xl tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#00df8f]' : 'text-white group-hover:text-gray-300'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </div>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={16} className="text-[#00df8f]" />
                    ) : (
                      <Plus size={16} className="text-gray-400" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 leading-relaxed pb-8 max-w-2xl pl-0 sm:pl-16">
                        {stage.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
