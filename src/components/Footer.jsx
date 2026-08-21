import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const menuLinks = ['About', 'Work', 'Services', 'Contact'];
const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Dribbble', href: '#' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative pt-32 pb-10 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none">
        <span className="font-display font-bold text-[25vw] leading-none text-white opacity-[0.05] whitespace-nowrap translate-y-1/3">
          CONTACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="font-display font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[0.95]">
              HOW CAN I HELP?
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md mb-10">
              Have a project in mind, or just want to talk design? My inbox
              is always open — I read every message myself.
            </p>
            <motion.a
              href="mailto:hello@mizan.design"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-white text-[#0d1116] font-semibold text-sm"
            >
              hello@mizan.design
              <span className="w-8 h-8 rounded-full bg-[#0d1116] flex items-center justify-center">
                <ArrowUpRight size={16} className="text-white" />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="grid grid-cols-2 gap-8"
          >
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                Menu
              </p>
              <ul className="space-y-4">
                {menuLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-[#00df8f] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                Socials
              </p>              <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#00df8f] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2026 Mizan Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
