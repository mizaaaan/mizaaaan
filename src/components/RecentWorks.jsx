import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'Web Platform',
    title: 'Pulse Health Dashboard',
    description:
      'A patient-facing dashboard for a healthcare platform, focused on legibility and calm under pressure — designed for people checking results at their most anxious moments.',
    tags: ['Product Design', 'Design System', 'React'],
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Mobile App',
    title: 'Ledger Finance App',
    description:
      'A cooperative finance app that turns raw transaction data into a story members can actually follow — clear categories, honest numbers, no jargon.',
    tags: ['UX Research', 'Mobile', 'Fintech'],
    image:
      'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'Brand & Web',
    title: 'Northlight Studio',
    description:
      'A full identity and site rebuild for a design studio — architectural grid, restrained type, and a portfolio system built to scale with new work.',
    tags: ['Branding', 'Web Design', 'Art Direction'],
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
  },
  {
    category: 'E-Commerce',
    title: 'Aperture Marketplace',
    description:
      'A marketplace redesign focused on trust signals and checkout speed — every screen tested against a single question: does this make buying easier?',
    tags: ['E-Commerce', 'Conversion', 'UI Design'],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
];

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cycleToBack = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const bringToFront = (idx) => {
    setActiveIdx(idx);
  };

  const active = projects[activeIdx];

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="text-sm font-semibold text-[#00df8f] uppercase tracking-widest">
              Selected Work
            </span>
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl mt-4 text-white">
              RECENT WORKS
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-semibold text-gray-300 uppercase tracking-widest hover:border-[#00df8f] hover:text-[#00df8f] transition-colors duration-300">
            View All Projects
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stack */}
          <div className="lg:col-span-7">
            <div
              className="relative h-[340px] sm:h-[450px] md:h-[480px]"
              style={{ perspective: 1200 }}
            >
              {projects.map((project, idx) => {
                let diff = idx - activeIdx;
                if (diff < 0) diff += projects.length;

                return (
                  <motion.div
                    key={project.title}
                    onClick={() =>
                      diff === 0 ? cycleToBack() : bringToFront(idx)
                    }
                    animate={{
                      y: diff * 35,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      zIndex: projects.length - diff,
                    }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-2xl"
                    style={{ transformOrigin: 'top center' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116]/70 via-transparent to-transparent" />
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 mt-6">
              {projects.map((project, idx) => (
                <button
                  key={project.title}
                  onClick={() => bringToFront(idx)}
                  aria-label={`View ${project.title}`}
                  className="group"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? 'w-8 h-2 bg-[#00df8f]'
                        : 'w-2 h-2 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description panel */}
          <div className="lg:col-span-5 flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  {active.category}
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-5">
                  {active.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-white/15 text-xs text-gray-400 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] text-[#0d1116] font-semibold text-sm"
                >
                  Explore Project
                  <span className="w-8 h-8 rounded-full bg-[#0d1116] flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-[#00df8f]" />
                  </span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
