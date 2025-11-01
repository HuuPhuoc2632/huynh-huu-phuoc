import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="w-full py-20 bg-black/30 backdrop-blur-lg text-center"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-white"
        data-aos="fade-down"
      >
        {t("header.career_goal")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10 px-6 text-center">
        <div data-aos="fade-right">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            {t("header.career_short")}
          </h3>
          <p className="text-gray-300 leading-relaxed text-justify">
            {t("header.short_term")}
          </p>
        </div>

        <div data-aos="fade-left">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            {t("header.career_long")}
          </h3>
          <p className="text-gray-300 leading-relaxed text-justify">
            {t("header.long_term")}
          </p>
        </div>
      </div>
    </section>
  );
}
