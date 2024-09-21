// Import gambar dari asset
import naruto from '../assets/img/naruto.jpg';
import aot from '../assets/img/aot.jpg';
import jujutsu from '../assets/img/jujutsu.jpg';
import spy from '../assets/img/spy.jpg';
import demon from '../assets/img/demon.jpg';
import boku from '../assets/img/boku.jpg';

// Data daftarAnime
const daftarAnime = [
  {
    id: 1,
    judul: 'Jujutsu Kaisen',
    genre: 'Adventure, Dark Fantasy, Supernatural',
    img: jujutsu,
    rilis: '2020',
    pengarang: 'Gege Akutami',
    episode: 'Season 3',
    status: 'On Going'
  },
  {
    id: 2,
    judul: 'My Hero Academia',
    genre: 'Adventure, Science Fantasy, Superhero',
    img: boku,
    rilis: '2016',
    pengarang: 'Kohei Horikoshi',
    episode: 'Season 6',
    status: 'On Going'
  },
  {
    id: 3,
    judul: 'Attack on Titan',
    genre: 'Action, Dark Fantasy, Post-apocalyptic',
    img: aot,
    rilis: '2013',
    pengarang: 'Hajime Isayama',
    episode: 'Season 4 Part 3',
    status: 'Completed'
  },
  {
    id: 4,
    judul: 'Naruto',
    genre: 'Adventure, Fantasy, Comedy, Martial Arts',
    img: naruto,
    rilis: '2002',
    pengarang: 'Masashi Kishimoto',
    episode: '220 (Naruto), 500 (Naruto Shippuden)',
    status: 'Completed'
  },
  {
    id: 5,
    judul: 'Spy x Family',
    genre: 'Adventure, Spy, Comedy',
    img: spy,
    rilis: '2022',
    pengarang: 'Tatsuya Endo',
    episode: 'Season 2',
    status: 'On Going'
  },
  {
    id: 6,
    judul: 'Kimetsu no Yaiba',
    genre: 'Adventure, Dark Fantasy, Martial Arts',
    img: demon,
    rilis: '2019',
    pengarang: 'Koyoharu Gotouge',
    episode: 'Season 4',
    status: 'On Going'
  },
];

export default daftarAnime