import { motion } from 'framer-motion';

const links = [
  { label: 'ABOUT', id: 'about' },
  { label: 'WORK', id: 'work' },
  { label: 'CONTACT', id: 'contact' },
];

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 left-0 w-full h-24 z-50 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-10 flex items-center justify-between">
        <button
          onClick={scrollTop}
          className="font-display text-2xl font-bold tracking-tight text-white"
        >
          MIZAN<span className="text-[#00df8f]">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-semibold text-gray-300 uppercase tracking-widest hover:text-[#00df8f] transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo('contact')}
          aria-label="Contact"
          className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center hover:border-[#00df8f]/60 transition-colors duration-300 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00df8f] group-hover:scale-125 transition-transform duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
