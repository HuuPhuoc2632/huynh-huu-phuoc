// src/components/Clients.jsx
import { useTranslation } from 'react-i18next';

export default function Clients() {
  const { t } = useTranslation();
  const clients = t('clients.items', { returnObjects: true });

  return (
    <section
      id="clients"
      className="w-full py-20 bg-black/30 backdrop-blur-lg text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2
          className="text-3xl md:text-3xl font-bold text-blue-400 mb-10 flex items-center justify-center gap-2"
          data-aos="fade-down"
        >
          {t('clients.title')}
        </h2>

        {/* Card giống Skills */}
        <div
          className="bg-gray-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-lg p-8"
          data-aos="fade-up"
        >
          <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed">
            {t('clients.description')}
          </p>

          {/* Grid Clients giống grid skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center 
                bg-white border border-slate-700 rounded-xl p-4 
                hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 
                transition-all duration-300 h-28"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-20 h-20 object-contain"
                />
                {/* <span className="mt-2 text-sm font-medium text-slate-200 tracking-wide">
                  {client.name}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
