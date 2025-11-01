import { useTranslation } from 'react-i18next';


export default function Footer({ viewCount }) {
    const { t } = useTranslation();
  
  return (
    
    <footer className="text-center py-8 text-gray-600 text-sm">
      <p>{t('footer.credit')} - Views: {viewCount}</p>
    </footer>
  );
}