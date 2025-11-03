import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section
      id="education"
      className="w-full py-24 bg-gradient-to-b from-black/40 via-slate-900/20 to-black/40 backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-16 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
          data-aos="fade-down"
        >
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
          <span className="whitespace-nowrap">{t("education.title")}</span>
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="group relative bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-center gap-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative flex-shrink-0 w-36 h-36 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full p-3 shadow-2xl shadow-blue-500/30 group-hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-inner flex items-center justify-center">
              <img
                src={t("education.university.logo")}
                alt={t("education.university.name")}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          <div className="relative text-center md:text-left space-y-3 flex-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              {t("education.university.name")}
            </h3>
            <p className="text-sm text-cyan-400 font-medium tracking-wide">
              {t("education.university.period")}
            </p>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-cyan-400">{t("education.labels.major")}:</strong>{" "}
              {t("education.university.major")} |{" "}
              <strong className="text-cyan-400">{t("education.labels.gpa")}:</strong>{" "}
              {t("education.university.gpa")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {["diploma", "toeic"].map((type, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="group relative bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => openModal(t(`education.certificates.${type}.image`))}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <p className="relative z-10 text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                {t(`education.certificates.${type}.title`)}
              </p>

              <div className="relative rounded-xl overflow-hidden border border-slate-700/70 shadow-inner">
                <img
                  src={t(`education.certificates.${type}.image`)}
                  alt={t(`education.certificates.${type}.title`)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-700/70 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-slate-800/80 hover:bg-red-600/80 text-slate-300 hover:text-white rounded-full p-2.5 backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-red-500/30 z-10"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full rounded-xl border border-slate-700/70 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}