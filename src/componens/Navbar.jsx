import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CiMenuKebab } from 'react-icons/ci';
import gsap from 'gsap';

import logo from '../assets/img/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scroll, setScroll] = useState(false);
  const logoRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'anime', label: 'Anime' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Logo bouncing animation
    const bounceTl = gsap.timeline({ repeat: -1, yoyo: true });
    bounceTl.to(logoRef.current, {
      y: -10,
      duration: 0.6,
      ease: "power1.inOut"
    });

    // Observer for active link
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Scroll handling
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      bounceTl.kill(); // Clean up the animation when component unmounts
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full px-4 md:px-12 py-4 z-30 transition-all duration-300 ease-in-out ${scroll ? 'bg-red-400 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img ref={logoRef} src={logo} alt="Logo" className="w-12 z-50" />
        <nav className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-4xl text-white md:hidden z-20"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CiMenuKebab /> : <RxHamburgerMenu />}
          </button>
          <ul className={`
            md:flex md:static absolute top-full left-0 w-full
            md:bg-transparent bg-red-400 bg-opacity-90 md:bg-opacity-100
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible'}
            md:space-x-6 space-y-4 md:space-y-0
            md:p-0 p-4
          `}>
            {navItems.map(({ id, label }) => (
              <li key={id} className="text-center">
                <a
                  href={`#${id}`}
                  onClick={() => handleLinkClick(id)}
                  className={`
                    block py-2 px-4 text-white text-lg font-semibold
                    hover:text-gray-300 transition duration-300
                    ${activeLink === id ? 'border-b-2 border-white' : ''}
                  `}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;