// Experience.jsx
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  // Lấy dữ liệu, không cần type
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section className="mb-12" id="experience">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        {t('experience.title')}
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-xl shadow-lg p-5 hover:shadow-blue-800/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-md shadow-green-600/50"></div>

              <div className="flex-1">
                <h3 className="font-bold text-lg text-blue-300">{exp.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{exp.period}</p>

                <p className="text-slate-200 mt-2 leading-relaxed">
                  {exp.desc}
                </p>

                {exp.tech && (
                  <p className="text-xs text-slate-300 mt-3 font-mono">
                    <strong className="text-cyan-400">
                      {t('experience.tech_label', { defaultValue: 'Công nghệ:' })}
                    </strong>{' '}
                    {exp.tech}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}