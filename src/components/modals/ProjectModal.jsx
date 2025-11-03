import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function ProjectModal({ project, currentImage, onClose, onPrev, onNext }) {
  if (!project) return null;

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const currentMedia = project.images[currentImage];
  const isVideo = currentMedia?.endsWith(".mp4") || currentMedia?.endsWith(".webm");

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 md:p-6 animate-fadeIn">
      <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-700/50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative animate-scaleIn backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-800/70 hover:bg-red-600/80 text-slate-300 hover:text-white rounded-full p-2.5 backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-red-500/30 z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="p-6 pb-4">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">
            {project.name}
          </h3>
        </div>

        <div className="relative group mx-6 mb-6">
          <div className="overflow-hidden rounded-2xl border border-slate-700/70 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-1">
            {isVideo ? (
              <div className="relative w-full h-64 md:h-80 bg-black/50 rounded-xl overflow-hidden">
                <video
                  src={currentMedia}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  loop
                  playsInline
                >
                  <track kind="captions" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full p-4 shadow-2xl shadow-blue-500/50">
                    <PlayIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={currentMedia}
                alt={project.name}
                className="w-full h-64 md:h-80 object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            )}
          </div>

          <button
            onClick={onPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full p-3 shadow-xl backdrop-blur-md transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={onNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full p-3 shadow-xl backdrop-blur-md transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {project.images.length > 1 && (
            <div className="flex gap-2 justify-center mt-4 flex-wrap">
              {project.images.map((media, idx) => {
                const isThumbVideo = media.endsWith(".mp4") || media.endsWith(".webm") ||media.includes('drive.google.com');
                return (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(idx);
                    }}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all group/thumb ${
                      idx === currentImage
                        ? "border-cyan-400 shadow-lg shadow-cyan-400/30 scale-105"
                        : "border-slate-600 opacity-60 hover:opacity-100 hover:border-slate-400"
                    }`}
                  >
                    {isThumbVideo ? (
                      <>
                        <video
                          src={media}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <PlayIcon className="w-5 h-5 text-cyan-400" />
                        </div>
                      </>
                    ) : (
                      <img src={media} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="px-6 pb-6 space-y-5">
          <p className="text-slate-300 text-base leading-relaxed tracking-wide">
            {project.desc}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-cyan-400 font-semibold text-sm">Tech:</span>
            <span className="text-sm text-slate-200 font-mono bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
              {project.tech}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {project.detail.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-slate-800/70 to-slate-700/50 p-4 rounded-xl border border-slate-600/50 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <p className="text-slate-200 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}