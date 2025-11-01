// Skills.jsx
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skills = t('skills.items', { returnObjects: true });

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        {t('skills.title')}
      </h2>

      <div className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg p-6">
        {/* Grid kỹ năng */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between 
             bg-white border border-slate-300 rounded-xl p-3 
             hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 
             transition-all duration-300 h-24"
            >
              {/* Icon */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />

              {/* Tên kỹ năng luôn sát đáy */}
              <span className="mt-auto text-xs font-semibold text-gray-800 text-center tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Phần mô tả thêm bên dưới */}
        <div className="mt-6 text-sm text-slate-300 leading-relaxed space-y-2">
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
    </section>
  );
}
