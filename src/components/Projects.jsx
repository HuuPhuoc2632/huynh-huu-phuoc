// Projects.jsx
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
    <section className="mb-16" id="projects">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">
        {t("projects.title")}
      </h2>

      {/* Grid danh sách dự án */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedProject(proj);
              setCurrentImage(0);
            }}
            className="cursor-pointer bg-[#1e293b]/70 border border-slate-700 rounded-xl overflow-hidden 
            shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:-translate-y-2 
            transition-all duration-300 group"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={proj.images[0]}
                alt={proj.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-blue-300 group-hover:text-blue-400">
                {proj.name}
              </h3>
              <p className="text-sm text-slate-300 mt-2 line-clamp-3">
                {proj.desc}
              </p>
              <p className="text-xs text-cyan-400 mt-3 font-mono">
                <strong>{t("projects.tech_label")}:</strong> {proj.tech}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal chi tiết */}
      {selectedProject &&   (
        <ProjectModal
    project={selectedProject}
    currentImage={currentImage}
    onClose={() => setSelectedProject(null)}
    onPrev={handlePrev}
    onNext={handleNext}
  />
      )}
    </section>
  );
}
