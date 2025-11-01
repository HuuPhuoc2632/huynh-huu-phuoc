// src/components/FloatingButtons.jsx
import { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaArrowUp, FaGithub } from "react-icons/fa";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">

      {/* ✅ Social buttons (đã tăng kích thước) */}
      <div className="flex flex-col gap-4 mb-2 animate-fadeIn">
        <a
          href="https://www.facebook.com/huuphuoc.IT.2632"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all"
        >
          <FaFacebookF size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/huuphuoc2632/"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://zalo.me/0348307336"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg transition-all"
        >
          <img src="../icons/zalo.png" alt="Zalo" className="w-12 h-12 rounded-full object-cover" />
        </a>

            <a
          href="https://github.com/HuuPhuoc2632"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-black text-white rounded-full shadow-md transition"
        >
          <FaGithub size={48} />
        </a>
      </div>

      {/* ✅ Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
    