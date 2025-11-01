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
    <section className="mb-12">
      {/* === HỌC VẤN === */}
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        {t('education.title')}
      </h2>

      {/* Thông tin trường */}
      <div className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg p-6 flex items-center gap-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
        {/* LOGO IUH TO + NỀN TRẮNG */}
        <div className="w-32 h-32 flex items-center justify-center rounded-full bg-white border-4 border-blue-500 shadow-xl p-3">
          <img
            src={t('education.university.logo')}
            alt={t('education.university.name')}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <div className="text-slate-200 flex-1">
          <h3 className="font-bold text-xl text-blue-300">
            {t('education.university.name')}
          </h3>
          <p className="text-sm text-slate-400">{t('education.university.period')}</p>
          <p className="mt-2 leading-relaxed text-slate-300">
            <strong className="text-cyan-400">{t('education.labels.major')}:</strong> {t('education.university.major')} &nbsp;|&nbsp; 
            <strong className="text-cyan-400">{t('education.labels.gpa')}:</strong> {t('education.university.gpa')}
          </p>
        </div>
      </div>

      {/* === BẰNG CẤP & CHỨNG CHỈ === */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bằng đại học */}
        <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
          <p className="text-xs font-medium text-cyan-400 mb-2">{t('education.certificates.diploma.title')}</p>
          <img
            src={t('education.certificates.diploma.image')}
            alt={t('education.certificates.diploma.title')}
            className="w-full rounded-lg shadow-lg cursor-pointer hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
            onClick={() => openModal(t('education.certificates.diploma.image'))}
          />
        </div>

        {/* Chứng chỉ TOEIC */}
        <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
          <p className="text-xs font-medium text-cyan-400 mb-2">{t('education.certificates.toeic.title')}</p>
          <img
            src={t('education.certificates.toeic.image')}
            alt={t('education.certificates.toeic.title')}
            className="w-full rounded-lg shadow-lg cursor-pointer hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
            onClick={() => openModal(t('education.certificates.toeic.image'))}
          />
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
              className="absolute top-2 right-2 bg-slate-800 text-slate-100 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Zoomed certificate"
              className="w-full h-auto rounded-lg shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}