function AnimeModal({selectedAnime, handleCloseModal}) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{selectedAnime.judul}</h2>
        <p className="mb-2">
          <strong>Tanggal Rilis:</strong> {selectedAnime.rilis}
        </p>
        <p className="mb-2">
          <strong>Pengarang:</strong> {selectedAnime.pengarang}
        </p>
        <p className="mb-2">
          <strong>Episode:</strong> {selectedAnime.episode}
        </p>
        <p className="mb-4">
          <strong>Status:</strong> {selectedAnime.status}
        </p>
        <div className="flex justify-end">
          <button onClick={handleCloseModal} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 active:scale-75 transition-all">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeModal;
