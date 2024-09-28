import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import daftarAnime from '../data/dataAnime';
import Card from '../page/Card';
import AnimeModal from '../page/AnimeModal';

gsap.registerPlugin(ScrollTrigger);

function Anime() {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const cardsRef = useRef([]);
  const modalRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  const handleOpenModal = (anime) => {
    setSelectedAnime(anime);
    // Animate modal opening
    gsap.fromTo(modalRef.current, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const handleCloseModal = () => {
    // Animate modal closing
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setSelectedAnime(null)
    });
  };

  return (
    <section id="anime" ref={containerRef}>
      <div className="anime-page p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8">Daftar Anime Favorit</h1>
        <p className="text-center mb-12 text-lg">Berikut adalah list anime favorit saya:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarAnime.map((anime, index) => (
            <div ref={el => cardsRef.current[index] = el} key={anime.id}>
              <Card anime={anime} handleOpenModal={handleOpenModal} />
            </div>
          ))}
        </div>

        {/* Modal untuk detail anime */}
        {selectedAnime && (
          <div ref={modalRef}>
            <AnimeModal selectedAnime={selectedAnime} handleCloseModal={handleCloseModal} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Anime;