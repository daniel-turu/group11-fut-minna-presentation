import { useState, useEffect } from "react";
import SlideMaster from "./components/SlideMaster";
import Slide1 from "./components/slides/Slide1";
import Slide2 from "./components/slides/Slide2";
import Slide3 from "./components/slides/Slide3";
import Slide4 from "./components/slides/Slide4";
import Slide5 from "./components/slides/Slide5";
import Slide6 from "./components/slides/Slide6";
import Slide7 from "./components/slides/Slide7";
import Slide8 from "./components/slides/Slide8";
import Slide9 from "./components/slides/Slide9";
import Slide10 from "./components/slides/Slide10";
import Slide11 from "./components/slides/Slide11";
import Slide12 from "./components/slides/Slide12";
import Slide13 from "./components/slides/Slide13";
import Slide14 from "./components/slides/Slide14";
import Slide15 from "./components/slides/Slide15";
import Slide16 from "./components/slides/Slide16";
import Slide17 from "./components/slides/Slide17";
import TableOfContents from "./components/slides/TableOfContents";

// Add subsequent slides to this array as they are built
const slideConfig = [
  { component: Slide1, number: 1 },
  { component: Slide2, number: 2 },
  { component: TableOfContents, number: null }, // Unnumbered between 2 and 3
  { component: Slide3, number: 3 },
  { component: Slide4, number: 4 },
  { component: Slide5, number: 5 },
  { component: Slide6, number: 6 },
  { component: Slide7, number: 7 },
  { component: Slide8, number: 8 },
  { component: Slide9, number: 9 },
  { component: Slide10, number: 10 },
  { component: Slide11, number: 11 },
  { component: Slide12, number: 12 },
  { component: Slide13, number: 13 },
  { component: Slide14, number: 14 },
  { component: Slide15, number: 15 },
  { component: Slide16, number: 16 },
  { component: Slide17, number: 17 },
];

const totalNumberedSlides = slideConfig.filter(s => s.number !== null).length;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slideConfig.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    const handleResize = () => {
      // The presentation is designed for ~1280x800.
      // We calculate how much we need to scale it down to fit the current screen with a 32px safe padding around the edges.
      const scaleX = (window.innerWidth - 64) / 1280;
      const scaleY = (window.innerHeight - 64) / 800;
      // We use Math.min to ensure the entire presentation fits on screen without cropping
      // We cap the scale at 1 so it doesn't get massively huge on ultrawide monitors
      setScale(Math.min(scaleX, scaleY, 1));
    };

    // Initial calculation
    handleResize();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentSlide]);

  const currentSlideData = slideConfig[currentSlide];
  const CurrentSlideComponent = currentSlideData.component;

  return (
    <div className="w-screen h-screen bg-dark-900 text-white overflow-hidden tech-grid relative flex flex-col items-center justify-center">
      {/* Background ambient glows (multiply for light mode) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-theme-cyan/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-theme-purple/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-theme-blue/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Scaling Wrapper */}
      <div
        className="flex items-center justify-center transition-transform duration-300 origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        <main className="w-[1280px] h-[800px] z-10 glass-panel relative rounded-2xl flex flex-col p-8 overflow-hidden shrink-0">
          <div className="flex-1 w-full min-h-0 relative">
            <CurrentSlideComponent />
          </div>

          {/* Navigation Wrapper */}
          <SlideMaster
            current={currentSlideData.number}
            total={totalNumberedSlides}
            onNext={nextSlide}
            onPrev={prevSlide}
            isFirst={currentSlide === 0}
            isLast={currentSlide === slideConfig.length - 1}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
