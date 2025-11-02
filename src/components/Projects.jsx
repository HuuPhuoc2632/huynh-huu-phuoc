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
    <section id="projects" className="w-full py-20 bg-black/30 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-12"
          data-aos="fade-down"
        >
          {t("projects.title")}
        </h2>

        {/* Grid Project Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              data-aos="fade-up"
              onClick={() => {
                setSelectedProject(proj);
                setCurrentImage(0);
              }}
              className="
              bg-gray-800/60
              cursor-pointer backdrop-blur-xl border border-slate-700 
                         rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
                         hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Hình ảnh dự án */}
              <div className="h-44 overflow-hidden">
                <img
                  src={proj.images[0]}
                  alt={proj.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Nội dung */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-blue-300 group-hover:text-blue-400 transition">
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

        {/* Modal chi tiết dự án */}
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
  