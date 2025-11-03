import { useTranslation } from "react-i18next";
import profilePic from "../assets/profile.jpg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const stats = [
    { number: "4+", label: t("header.stats.years_dev") },
    { number: "2+", label: t("header.stats.years_work") },
    { number: "8+", label: t("header.stats.projects") },
  ];

  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-black/60 via-slate-900/40 to-black/40 backdrop-blur-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-900/5 to-transparent"></div>

      <div className="absolute z-50 top-6 right-6 flex gap-3">
        <button
          onClick={() => i18n.changeLanguage("vi")}
          className={`group relative px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            i18n.language === "vi"
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/40"
              : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80"
          }`}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            Tiếng Việt
          </span>
          {i18n.language === "vi" && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          )}
        </button>

        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`group relative px-4 py-2 rounded-xl text-sm font-semibold backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            i18n.language === "en"
              ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/40"
              : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/80"
          }`}
        >
          <span className="relative z-10 flex items-center gap-1.5">
            English
          </span>
          {i18n.language === "en" && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          )}
        </button>
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 md:px-12 mt-20 lg:mt-0">
        <div className="flex-1 text-center lg:text-left space-y-6" data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block text-2xl md:text-4xl text-cyan-300 font-medium tracking-wide">
              {t("header.greeting")}
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t("header.name")}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-semibold">
            {t("header.role")}
          </p>

          <p className="text-slate-300 text-lg flex items-center justify-center lg:justify-start gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {t("header.location")}
          </p>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
            {t("header.intro")}
          </p>
        </div>

        <div className="flex justify-center flex-1" data-aos="fade-left" data-aos-delay="200">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

            <div className="absolute inset-0 -z-10">
              {[...Array(12)].map((_, i) => {
                const delay = i * 0.3;
                const duration = 2 + Math.random() * 2;
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`,
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    }}
                  >
                    <div className="absolute inset-0 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => {
                const delay = i * 0.4;
                const duration = 3 + Math.random() * 3;
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float"
                    style={{
                      "--delay": `${delay}s`,
                      "--duration": `${duration}s`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    <div className="absolute inset-0 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-20 px-6 md:px-12" data-aos="fade-up" data-aos-delay="300">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/70 via-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {item.number}
              </p>
              <p className="relative z-10 mt-3 text-sm md:text-base text-slate-300 font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        .animate-float {
          animation: float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>
    </header>
  );
}