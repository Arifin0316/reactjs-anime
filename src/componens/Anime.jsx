import React, { useState } from 'react';

import daftarAnime from '../data/dataAnime';
import Card from '../page/Card';
import AnimeModal from '../page/AnimeModal';

function Anime() {
  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleOpenModal = (anime) => {
    setSelectedAnime(anime); // Set data anime yang diklik
  };

  const handleCloseModal = () => {
    setSelectedAnime(null); // Set kembali ke null untuk menutup modal
  };

  return (
    <section id="anime">
      <div className="anime-page p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8">Daftar Anime Favorit</h1>
        <p className="text-center mb-12 text-lg">Berikut adalah list anime favorit saya:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarAnime.map((anime) => (
            <Card anime={anime} key={anime.id} handleOpenModal={handleOpenModal} />
          ))}
        </div>

        {/* Modal untuk detail anime */}
        {selectedAnime && <AnimeModal selectedAnime={selectedAnime} handleCloseModal={handleCloseModal} />}
      </div>
    </section>
  );
}

export default Anime;
