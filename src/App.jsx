// src/App.jsx
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Clients from './components/Clients';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButton';
import About from './components/About';

function App() {
  const { i18n } = useTranslation();
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, offset: 100, delay: 100, once: true });

    const API_URL = 'https://69058d4dee3d0d14c132edf2.mockapi.io/count/1';

    const updateViews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const newCount = (data.count || 0) + 1;

        await fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: newCount }),
        });

        setViewCount(newCount);
      } catch (err) {
        console.error('Lỗi khi cập nhật lượt xem:', err);
      }
    };

    updateViews();
  }, []);

  const changeLang = (lang) => i18n.changeLanguage(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black/30  from-gray-900 via-gray-800 to-gray-700 text-gray-100">

      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Clients />

      <Footer viewCount={viewCount} />
    
      <FloatingButtons />
    </div>
  );
}

export default App;
