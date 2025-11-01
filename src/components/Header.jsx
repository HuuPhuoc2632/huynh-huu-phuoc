import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg';

export default function Header() {
  const { t, i18n } = useTranslation();
  const skills = t('skills.header_item', { returnObjects: true });
  const stats = [
    { number: "4+", label: t("header.stats.years_dev") },
    { number: "2", label: t("header.stats.years_work") },
    { number: "8+", label: t("header.stats.projects") },
  ];

  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div> */}

      <div
        className="
    absolute z-50 flex gap-2 
    top-4 right-4
    md:top-6 md:right-6
    transform
    md:translate-y-0
    translate-y-[-10px]   /* đẩy lên 1 xíu cho đẹp và không đụng avatar */
  "
      >
        <button
          onClick={() => i18n.changeLanguage('vi')}
          className={`px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-md transition-all
      ${i18n.language === 'vi' ? 'bg-blue-600 text-white' : 'bg-gray-800/70 text-gray-300 hover:bg-gray-600'}`}
        >
          🇻🇳 Tiếng Việt
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-md transition-all
      ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-800/70 text-gray-300 hover:bg-gray-600'}`}
        >
          🇬🇧 English
        </button>
      </div>

      {/* MAIN CONTENT - Avatar lên trước trên mobile */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-8 md:px-16 mt-10 md:mt-0">

        {/* TEXT SECTION */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            <span className="block text-gray-300 text-2xl md:text-4xl">{t('header.greeting')}</span>
            <span className="text-blue-400 block mt-1 tracking-wide">{t('header.name')}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4 font-medium">{t('header.role')}</p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:mx-0">📍 {t('header.location')}</p>
          <p className="text-gray-400 mt-4 max-w-2xl md:max-w-3xl text-justify leading-relaxed mx-auto md:mx-0">
            {t('header.intro')}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#experience" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">🚀 {t('experience.title')}</a>
            <a href="#projects" className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition">{t('projects.title')}</a>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-800/70 text-gray-200 text-sm rounded-full border border-gray-700 hover:bg-gray-700/80 transition">
                <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AVATAR SECTION */}
        <div className="relative flex justify-center flex-1">
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-full border-4 border-blue-500 shadow-[0_0_35px_rgba(59,130,246,0.4)] overflow-hidden">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* STATS - Full width & nằm dưới toàn bộ */}
      <div className="w-full max-w-7xl mx-auto mt-16 px-8 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {stats.map((item, index) => (
            <div key={index} className="bg-gray-800/60 border border-gray-700 rounded-2xl py-6 text-center shadow-lg">
              <p className="text-3xl md:text-4xl font-bold text-blue-400">{item.number}</p>
              <p className="text-gray-300 mt-2 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
