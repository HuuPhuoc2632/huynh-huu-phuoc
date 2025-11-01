// src/components/Clients.jsx
import { useTranslation } from 'react-i18next';

export default function Clients() {
  const { t } = useTranslation();
  const clients = t('clients.items', { returnObjects: true });

  return (
    <section className="mb-16">
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        {t('clients.title')}
      </h2>

      <div className="bg-[#1e293b]/70 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-lg p-10 text-center hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all">
        <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed">
          {t('clients.description')}
        </p>

        {/* Lưới logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="w-32 h-24 flex flex-col items-center 
             bg-white border border-slate-200 rounded-xl p-3 
             hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 
             transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain"
              />

              <span className="mt-auto text-sm font-semibold text-gray-800 tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
