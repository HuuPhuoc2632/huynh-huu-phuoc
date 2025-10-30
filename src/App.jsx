// src/App.jsx
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <Header />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}

export default App;