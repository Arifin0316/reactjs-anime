import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Tentang */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm">
              ini adalah wesite tentang list anime yang saya sukai jika ada rekomenasi anime yang bagus atau ada kritik dan saran silakan tingalkan pesan di atas
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-300 transition duration-300">home</a></li>
              <li><a href="#about" className="hover:text-gray-300 transition duration-300">about</a></li>
              <li><a href="#anime" className="hover:text-gray-300 transition duration-300">anime</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition duration-300">cotact</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <FaEnvelope className="mr-2" size={18} />
                <a href="arifin03166@gmail.com" className="hover:text-gray-300 transition duration-300">arifin0316@gmail.com</a>
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" size={18} />
                <a href="tel:+123456789" className="hover:text-gray-300 transition duration-300">+62 123 456 789</a>
              </p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition duration-300"><FaFacebookF size={24} /></a>
              <a href="#" className="hover:text-gray-300 transition duration-300"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/arifin0316" className="hover:text-gray-300 transition duration-300"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} criate by <a href="https://www.instagram.com/arifin0316/">arifin</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;