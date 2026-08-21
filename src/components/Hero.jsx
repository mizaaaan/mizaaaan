import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex items-center pt-16 sm:pt-20 md:pt-24 grid-bg">
      {/* Giant background typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-bold text-[20vw] leading-none text-white opacity-[0.02] whitespace-nowrap">
          DESIGN
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-5 sm:px-10 py-12 sm:py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00df8f]" />
              <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                UX/UI Designer
              </span>
            </div>

            <h1 className="font-display font-bold tracking-tighter leading-[0.9] text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 sm:mb-8">
              <span className="text-white">DIGITAL</span>
              <br />
              <span className="text-stroke">EXPERIENCES</span>
              <span className="text-[#00df8f]">.</span>
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-md mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
              I craft interfaces that feel inevitable — where clarity, motion,
              and intention meet. Every pixel is a decision, every interaction
              a small piece of trust earned.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('work')}
                className="flex items-center gap-2 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] text-[#0d1116] font-semibold text-sm"
              >
                View My Work
                <span className="w-8 h-8 rounded-full bg-[#0d1116] flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-[#00df8f]" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#14181f] border border-white/15 text-white font-semibold text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#00df8f]" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - Interactive ID card — visible on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Mobile: small centered card */}
            <div className="lg:hidden flex justify-center w-full">
              <motion.div
                animate={{ y: [0, -8, 0], rotateZ: [-1, 1, -1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[200px] h-[280px] sm:w-[240px] sm:h-[340px] md:w-[280px] md:h-[390px] rounded-[20px] sm:rounded-[24px] bg-[#14181f] border border-white/10 p-2 sm:p-3 shadow-2xl"
              >
                <div className="w-full h-full rounded-[14px] sm:rounded-[18px] overflow-hidden relative border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop"
                    alt="Mizan portrait"
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <p className="font-display font-semibold text-base sm:text-lg text-white">Mizan.</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                      Lead UX/UI Designer
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#00df8f] shadow-[0_0_8px_2px_rgba(0,223,143,0.5)]" />
                </div>
              </motion.div>
            </div>

            {/* Desktop: large draggable card with hanging wire */}
            <div className="hidden lg:flex items-center justify-center h-[560px]">
              <motion.div
                className="absolute top-0 w-1.5 h-40 bg-gradient-to-b from-white/0 via-white/20 to-white/40 rounded-full origin-top"
                style={{ transform: 'translateY(-140px)' }}
              />

              <motion.div
                drag
                dragElastic={0.2}
                dragConstraints={{ top: -20, bottom: 20, left: -20, right: 20 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileTap={{ cursor: 'grabbing' }}
                className="relative w-72 h-[420px] rounded-[28px] bg-[#14181f] border border-white/10 p-3 shadow-2xl cursor-grab"
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden relative border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop"
                    alt="Mizan portrait"
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display font-semibold text-xl text-white">Mizan.</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                      Lead UX/UI Designer
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#00df8f] shadow-[0_0_10px_2px_rgba(0,223,143,0.6)]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
