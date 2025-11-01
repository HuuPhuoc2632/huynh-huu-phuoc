// Modal.jsx
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import ReactDOM from "react-dom";

export default function ProjectModal({ project, currentImage, onClose, onPrev, onNext }) {
  if (!project) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e293b]/90 border border-slate-700 rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative animate-scaleIn">

        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition"
        >
          <XMarkIcon className="w-7 h-7" />
        </button>

        <h3 className="text-2xl font-bold text-blue-300 mb-4">{project.name}</h3>

        {/* Slider ảnh */}
        <div className="relative mb-4">
          <img
            src={project.images[currentImage]}
            alt={project.name}
            className="w-full h-72 object-contain rounded-lg border border-slate-700 shadow-inner bg-gray-900/40 p-2"
          />

          <button
            onClick={onPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-900/70 hover:bg-blue-500 
            text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-lg 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] backdrop-blur-sm transition-all"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={onNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-900/70 hover:bg-blue-500 
            text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-lg 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] backdrop-blur-sm transition-all"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        <p className="text-slate-200 text-sm mb-3 leading-relaxed">{project.desc}</p>
        <p className="text-sm text-cyan-400 font-mono">
          <strong>Tech:</strong> {project.tech}
        </p>
      </div>
    </div>,
    document.body
  );
}
