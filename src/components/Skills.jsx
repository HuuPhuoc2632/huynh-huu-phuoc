import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const skills = t("skills.items", { returnObjects: true });

  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-black/40 via-slate-900/20 to-black/40 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-16 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
          data-aos="fade-down"
        >
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          <span className="whitespace-nowrap">{t("skills.title")}</span>
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>

        <div
          className="bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                className="group relative bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-sm border border-slate-700/40 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center h-32 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-12 h-12 mb-3 p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain  group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                  />
                </div>

                <span className="relative z-10 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-left md:text-center">
            {[
              { label: "languages", key: "languages" },
              { label: "frameworks", key: "frameworks" },
              { label: "tools", key: "tools" },
              { label: "soft_skills", key: "soft_skills" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={200 + i * 80}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/40 rounded-xl p-4 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <p className="text-sm">
                  <strong className="text-cyan-400 font-semibold uppercase tracking-wider">
                    {t(`skills.labels.${item.label}`)}
                  </strong>
                  <span className="ml-3 text-slate-300 font-light">
                    {t(`skills.details.${item.key}`)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}