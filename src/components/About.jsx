import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl border border-border hover-glow"
          >
            <h3 className="text-xl font-bold text-primary mb-3">Short-term Goal</h3>
            <p className="text-gray-300 leading-relaxed">
              Strengthen Flutter/Dart expertise through real-world projects, mastering state management, API integration, and performance optimization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-2xl border border-border hover-glow"
          >
            <h3 className="text-xl font-bold text-primary mb-3">Long-term Goal</h3>
            <p className="text-gray-300 leading-relaxed">
              Become a Senior Flutter Developer, leading scalable architectures and mentoring the next generation.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
        >
          {[
            { label: "Experience", value: "1.5+ Years" },
            { label: "Projects", value: "3 Live Apps" },
            { label: "TOEIC", value: "545" },
            { label: "GPA", value: "3.06" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;