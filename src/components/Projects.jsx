import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectModal from "./modals/ProjectModal";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = t("projects.items", { returnObjects: true });

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="w-full py-24 bg-gradient-to-b from-black/40 via-slate-900/20 to-black/40 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-16 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
          data-aos="fade-down"
        >
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          <span className="whitespace-nowrap">{t("projects.title")}</span>
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => {
                setSelectedProject(proj);
                setCurrentImage(1);
              }}
              className="group relative bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.images[0]}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="relative p-6 space-y-3">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                  {proj.name}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {proj.desc}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {t("projects.tech_label")}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {proj.tech.split(", ").map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-0.5 bg-slate-700/60 text-slate-200 rounded-full border border-slate-600/50 font-mono shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            currentImage={currentImage}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </section>
  );
}