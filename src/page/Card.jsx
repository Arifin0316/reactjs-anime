function Card({anime, handleOpenModal}) {
  return (
    <div key={anime.id} className="anime-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={anime.img} alt={anime.judul} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{anime.judul}</h2>
        <p className="text-gray-700 mb-4">{anime.genre}</p>
        <button onClick={() => handleOpenModal(anime)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
          Detail
        </button>
      </div>
    </div>
  );
}

export default Card;
