import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Open for freelance, full-time, or collaboration opportunities.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:huuphuoc.2632@gmail.com" className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-600 text-dark font-bold rounded-full hover-glow">
            Email Me
          </a>
          <a href="tel:0348307336" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 hover-glow">
            Call Me
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500">
          © 2025 Huynh Huu Phuoc. Crafted with React & Tailwind.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;