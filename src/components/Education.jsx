// Education.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section
      id="education"
      className="w-full py-20 bg-black/30 backdrop-blur-lg text-center"
    >
      <div className="max-w-6xl mx-auto px-6" >

        {/* === TIÊU ĐỀ === */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-12">
          {t('education.title')}
        </h2>

        {/* === THÔNG TIN TRƯỜNG HỌC === */}
        <div
          data-aos="fade-up"
          className="
          bg-gray-800/60 backdrop-blur-xl border border-slate-700 
                     rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 
                     hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300"
        >
          <div className="min-w-[8rem] min-h-[8rem] flex items-center justify-center rounded-full 
                          bg-white border-4 border-blue-500 shadow-lg p-3">
            <img
              src={t('education.university.logo')}
              alt={t('education.university.name')}
              className="w-28 h-28 object-contain"
            />
          </div>

          <div className="text-slate-200 text-center md:text-left">
            <h3 className="font-bold text-xl text-blue-300">
              {t('education.university.name')}
            </h3>
            <p className="text-sm text-slate-400">{t('education.university.period')}</p>
            <p className="mt-3 leading-relaxed text-slate-300">
              <strong className="text-cyan-400">{t('education.labels.major')}:</strong> {t('education.university.major')} &nbsp;|&nbsp;
              <strong className="text-cyan-400">{t('education.labels.gpa')}:</strong> {t('education.university.gpa')}
            </p>
          </div>
        </div>

        {/* === CHỨNG CHỈ === */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {['diploma', 'toeic'].map((type, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-gray-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-4
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all"
            >
              <p className="text-xs font-semibold text-cyan-400 mb-3">
                {t(`education.certificates.${type}.title`)}
              </p>
              <img
                src={t(`education.certificates.${type}.image`)}
                alt={t(`education.certificates.${type}.title`)}
                className="w-full rounded-lg cursor-pointer border border-slate-700 
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition"
                onClick={() => openModal(t(`education.certificates.${type}.image`))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* === MODAL PHÓNG TO ẢNH === */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-slate-800 hover:bg-blue-500 text-white
                         rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Zoom"
              className="w-full rounded-lg border border-slate-700 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
