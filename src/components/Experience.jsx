import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section
      id="experience"
      // ❗ Background luôn hiển thị, không animation
      className="w-full py-20 bg-black/30 backdrop-blur-lg text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title - vẫn giữ animation nếu muốn */}
        <h2
          className="text-2xl md:text-3xl font-bold text-blue-400 mb-10 flex items-center justify-center gap-2"
          data-aos="fade-down"
        >
          {t('experience.title')}
        </h2>

        {/* Các item có animation */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              // ✅ Animation chỉ áp dụng vào card, không áp dụng vào background toàn section
              data-aos="fade-up"
              className="bg-gray-800/60 border border-gray-700 rounded-2xl py-6 text-center shadow-lg p-5 hover:shadow-blue-800/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 shadow-md shadow-green-600/50"></div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-lg text-blue-300">{exp.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{exp.period}</p>
                  <p className="text-slate-200 mt-2 leading-relaxed">{exp.desc}</p>
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
      </div>
    </section>
  );
}
