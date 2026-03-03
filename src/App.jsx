import { useState, useEffect } from 'react';
import SlideMaster from './components/SlideMaster';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide9 from './components/slides/Slide9';
import Slide10 from './components/slides/Slide10';
import Slide11 from './components/slides/Slide11';
import Slide12 from './components/slides/Slide12';
import Slide13 from './components/slides/Slide13';
import Slide14 from './components/slides/Slide14';
import Slide15 from './components/slides/Slide15';
import Slide16 from './components/slides/Slide16';
import Slide17 from './components/slides/Slide17';

// Add subsequent slides to this array as they are built
const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
  Slide17
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-dark-900 text-white overflow-hidden tech-grid relative flex flex-col items-center justify-center">
      {/* Background ambient glows (multiply for light mode) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-theme-cyan/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-theme-purple/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-theme-blue/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob" style={{ animationDelay: '4s' }}></div>

      <main className="w-full h-full max-w-7xl max-h-[800px] z-10 glass-panel relative rounded-2xl flex flex-col p-8 m-8 overflow-hidden">
        <div className="flex-grow w-full h-full relative">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Wrapper */}
        <SlideMaster
          current={currentSlide + 1}
          total={slides.length}
          onNext={nextSlide}
          onPrev={prevSlide}
        />
      </main>
    </div>
  );
}

export default App;
