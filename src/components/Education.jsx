import { useState } from 'react';
import bangDaiHoc from '../assets/bang-dai-hoc.png';
import bangToeic from '../assets/toeic.jpg';
import iuh from '../assets/iuh.png';

export default function Education() {
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
        🎓 TRÌNH ĐỘ HỌC VẤN
      </h2>

      {/* Thông tin trường */}
      <div className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700">
          <img
            src={iuh}
            alt="IUH Logo"
            className="w-20 h-20 object-contain drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]"
          />
        </div>
        <div className="text-slate-200">
          <h3 className="font-bold text-lg text-blue-300">
            Đại học Công Nghiệp TP.HCM (IUH)
          </h3>
          <p className="text-sm text-slate-400">2020 - 2024</p>
          <p className="mt-1 leading-relaxed text-slate-300">
            <strong className="text-cyan-400">Chuyên ngành:</strong> Kỹ thuật phần mềm &nbsp;|&nbsp; 
            <strong className="text-cyan-400"> GPA:</strong> 3.06
          </p>
        </div>
      </div>

      {/* === BẰNG CẤP & CHỨNG CHỈ === */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bằng đại học */}
        <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
          <p className="text-xs font-medium text-cyan-400 mb-2">🎓 Bằng tốt nghiệp:</p>
          <img
            src={bangDaiHoc}
            alt="Bằng đại học"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
            onClick={() => openModal(bangDaiHoc)}
          />
        </div>

        {/* Chứng chỉ TOEIC */}
        <div className="bg-[#1e293b]/60 backdrop-blur-md border border-slate-700 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
          <p className="text-xs font-medium text-cyan-400 mb-2">📘 Chứng chỉ TOEIC:</p>
          <img
            src={bangToeic}
            alt="Chứng chỉ TOEIC"
            className="w-full rounded-lg shadow-lg cursor-pointer hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
            onClick={() => openModal(bangToeic)}
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
            {/* Nút đóng */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-slate-800 text-slate-100 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Phóng to"
              className="w-full h-auto rounded-lg shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
