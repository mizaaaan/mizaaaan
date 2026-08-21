import { motion } from 'framer-motion';

const skills = [
  'UI/UX Design',
  'Figma',
  'React.js',
  'Framer Motion',
  'Tailwind CSS',
  'Design Systems',
  'Prototyping',
  'Motion Design',
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="text-sm font-semibold text-[#00df8f] uppercase tracking-widest">
            About
          </span>
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl mt-4 mb-8 text-white">
            DESIGNING WITH PURPOSE.
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed max-w-lg">
            <p>
              I'm Mizan, a designer and builder who moves fluidly between
              product strategy, interface craft, and the code that brings it
              to life. My work spans healthcare platforms, fintech
              dashboards, and mobile apps — always grounded in clarity and
              intent.
            </p>
            <p>
              I believe great design disappears into the experience. My
              process blends structured problem-solving with a genuine love
              for detail — the kind of care that shows up in a transition
              curve or a well-timed micro-interaction.
            </p>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div>
              <p className="font-display font-bold text-4xl text-white">20+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                Awards
              </p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <p className="font-display font-bold text-4xl text-white">100%</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                Commitment
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right column - toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 sm:p-10 h-fit"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            My Toolkit
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="px-5 py-2.5 rounded-full border border-white/15 text-sm text-gray-300 hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
