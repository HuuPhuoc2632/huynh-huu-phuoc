import { motion } from 'framer-motion'

const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const IconMap = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const IconCalendar = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <div className="w-64 h-64 mx-auto md:mx-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-4 border-white/20 mb-8 flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl font-bold text-black">
              PHUOC
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            HUYNH HUU PHUOC
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-white/80 mb-8">
            Junior Flutter Developer
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-black/50 rounded-xl">
              <IconPhone />
              <span>0348307336</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/50 rounded-xl">
              <IconMail />
              <span>huuphuoc.2632@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/50 rounded-xl">
              <IconMap />
              <span>Go Vap, HCMC</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-black/50 rounded-xl">
              <IconCalendar />
              <span>26/03/2002</span>
            </div>
          </div>
          
          <motion.a
            href="/HuynhHuuPhuoc_JuniorFlutterDeveloper_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xl rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            Download CV
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="p-8 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Short-term Goal</h3>
            <p className="text-lg text-white/80">
              To strengthen my expertise in Flutter/Dart by participating in real-world mobile projects...
            </p>
          </div>
          
          <div className="p-8 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Long-term Goal</h3>
            <p className="text-lg text-white/80">
              To grow into a Senior Flutter Developer, capable of designing scalable architectures...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero