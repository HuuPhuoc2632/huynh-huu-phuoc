// Skills.jsx
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skills = t('skills.items', { returnObjects: true });

  return (
    <section id="skills" className="w-full py-20 bg-black/30 backdrop-blur-lg text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-3xl font-bold text-blue-400 mb-10 flex items-center justify-center gap-2"
          data-aos="fade-down"
        >
          {t('skills.title')}
        </h2>

        <div
          className="backdrop-blur-xl p-8 bg-gray-800/60 border border-gray-700 rounded-2xl py-6 text-center shadow-lg"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center 
                bg-white border border-slate-700 rounded-xl p-4 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 
                transition-all duration-300 h-28"
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                <span className="mt-2 text-sm font-medium text-gray-800  tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-slate-300 leading-relaxed space-y-2 text-left md:text-center">
            <p>
              <strong className="text-cyan-400">{t('skills.labels.languages')}:</strong>{' '}
              {t('skills.details.languages')}
            </p>
            <p>
              <strong className="text-cyan-400">{t('skills.labels.frameworks')}:</strong>{' '}
              {t('skills.details.frameworks')}
            </p>
            <p>
              <strong className="text-cyan-400">{t('skills.labels.tools')}:</strong>{' '}
              {t('skills.details.tools')}
            </p>
            <p>
              <strong className="text-cyan-400">{t('skills.labels.soft_skills')}:</strong>{' '}
              {t('skills.details.soft_skills')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
