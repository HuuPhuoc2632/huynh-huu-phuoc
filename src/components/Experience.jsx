import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section id="experience" className="w-full py-24 bg-gradient-to-b from-black/40 via-slate-900/20 to-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-16 flex items-center justify-center gap-3"
          data-aos="fade-down"
        >
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          {t('experience.title')}
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/40 animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>

                <div className="flex-1 text-left space-y-2">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium tracking-wide">{exp.period}</p>
                  <p className="text-slate-300 leading-relaxed text-base">{exp.desc}</p>

                  {exp.tech && (
                    <div className="mt-4 flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                        {t('experience.tech_label', { defaultValue: 'Tech' })}
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {exp.tech.split(', ').map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-slate-700/60 text-slate-200 rounded-full border border-slate-600/50 font-mono shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}