import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../style/home.css';
import { characterData } from '../data/characterData';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!isOpen) {
      // Hanya set timer jika modal tidak terbuka
      timerRef.current = setTimeout(() => {
        handleNext();
      }, 15000);
    }
  }, [isOpen]);

  const handleNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characterData.length);
    resetTimer();
  }, [resetTimer]);

  const handlePrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + characterData.length) % characterData.length);
    resetTimer();
  }, [resetTimer]);

  const currentCharacter = useMemo(() => characterData[currentIndex], [currentIndex]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [resetTimer]);

  const handleOpenModal = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Hentikan timer ketika modal dibuka
    }
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    resetTimer(); // Mulai lagi timer ketika modal ditutup
  };

  return (
    <section id="home" className='overflow-hidden'>
      <div className="slider h-screen w-screen overflow-hidden relative">
        <div className="list relative w-full h-full">
          <div key={currentCharacter.id} className={`item absolute inset-0 transition-all duration-500 ${direction === 'next' ? 'animate-slideInNext' : 'animate-slideInPrev'}`}>
            <img src={currentCharacter.img} alt={currentCharacter.name} className="w-full h-full object-cover" />
            <div className="detail absolute top-1/4 left-16 text-white">
              <h2 className="title text-3xl font-bold tracking-widest mb-2 uppercase animate-fadeIn">{currentCharacter.title}</h2>
              <h1 className="name text-red-600 text-4xl md:text-6xl font-bold tracking-widest mb-2 uppercase leading-tight animate-fadeIn animation-delay-200">{currentCharacter.name}</h1>
              <figure className="flex items-center gap-4 animate-fadeIn animation-delay-400">
                <img src={currentCharacter.logo} alt={`${currentCharacter.name} avatar`} className="w-16 h-16 object-contain" />
                <figcaption className="text-xl md:text-2xl font-medium uppercase">{currentCharacter.karakter}</figcaption>
              </figure>
              <button type="button" className="mt-6 px-8 py-3 bg-red-500 rounded-full text-xl font-semibold shadow-lg hover:bg-red-600 transition-colors duration-300 animate-fadeIn animation-delay-600" onClick={handleOpenModal}>
                Detail
              </button>
            </div>
          </div>
        </div>
        <div className="navigation absolute bottom-20 left-16 flex gap-6">
          <button className="text-white bg-red-500 rounded-full p-3 hover:bg-red-600 transition-colors duration-300 z-20" onClick={handlePrev} aria-label="Previous character">
            <FaArrowLeft className="w-6 h-6" />
          </button>
          <button className="text-white bg-red-500 rounded-full p-3 hover:bg-red-600 transition-colors duration-300 z-20" onClick={handleNext} aria-label="Next character">
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full ">
              <h2 className="text-xl font-semibold mb-4">{currentCharacter.name}</h2>
              <p className="mb-4 md:max-h-full overflow-y-auto max-h-40">{currentCharacter.detail}</p>
              <div className="flex justify-end">
                <button onClick={handleCloseModal} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
