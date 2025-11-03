import { useTranslation } from 'react-i18next';

export default function Footer({ viewCount }) {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="w-full py-16 bg-gradient-to-t from-black/60 via-slate-900/30 to-black/40 backdrop-blur-xl border-t border-slate-700/50 text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Card footer giống các phần trước */}
       
          <p className="text-slate-300 text-sm">
            {t('footer.credit')} •{" "}
            <span className="text-cyan-400 font-semibold">
              Views: {viewCount}
            </span>
          </p>
      </div>
    </footer>
  );
}
