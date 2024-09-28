import onepice from '../assets/img/onepice.jpg'
import { FaInstagram, FaFacebookF, FaTiktok, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const socialRef = useRef();

  useGSAP(() => {
    // Image animation
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Text animation
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Social icons animation
    gsap.from(socialRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: socialRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: container });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05, duration: 0.3 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <section id="about" className="mx-6 mt-20 md:mt-52 overflow-hidden mb-20" ref={container}>
      <div className="px-6 md:px-12 flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-semibold">about one piece</h3>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-12 items-center my-10 md:my-24">
          <img 
            ref={imageRef}
            src={onepice} 
            alt="one piece" 
            className="img p-1 rounded-2xl md:w-2/5 shadow-lg" 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          />
          <div className="pt-8" ref={textRef}>
            <h4 className="text-slate-800 text-2xl md:text-3xl font-medium tracking-wider">one piece</h4>
            <p className="pt-4 md:text-lg leading-relaxed text-slate-600 font-bold">
              One Piece adalah anime yang mengikuti petualangan Monkey D. Luffy, seorang pemuda yang bercita-cita menjadi Raja Bajak Laut dengan menemukan harta karun legendaris, One Piece. Luffy memulai perjalanannya dengan membentuk kru
              yang beragam, dikenal sebagai Bajak Laut Topi Jerami, yang terdiri dari anggota dengan kemampuan dan impian unik. Mereka berlayar melintasi Grand Line, menghadapi musuh kuat, pemerintah dunia yang korup, dan misteri sejarah
              yang hilang, termasuk rahasia tentang Abad Kekosongan. Dengan kemampuan buah iblis Luffy yang membuat tubuhnya seperti karet, serta tekad yang kuat, mereka menghadapi berbagai tantangan sambil mengejar impian dan kebebasan
              sejati.
            </p>
          </div>
        </div>
        <div className="social w-full mt-6" ref={socialRef}>
          <ul className='flex items-center flex-wrap text-center justify-center gap-4 md:justify-center md:gap-12 mx-16'>
            <li><a href="https://www.instagram.com/arifin0316"><FaInstagram className='w-12 md:w-16 p-3 rounded-full text-white hover:text-slate-800 hover:translate-y-[-10px] bg-red-400 hover:bg-red-500 transition-all'/></a></li>
            <li><a href="#"><FaFacebookF className='w-12 md:w-16 p-3 rounded-full text-white hover:text-slate-800 hover:translate-y-[-10px] bg-red-400 hover:bg-red-500 transition-all'/></a></li>
            <li><a href="#"><FaTiktok className='w-12 md:w-16 p-3 rounded-full text-white hover:text-slate-800 hover:translate-y-[-10px] bg-red-400 hover:bg-red-500 transition-all'/></a></li>
            <li><a href="https://github.com/Arifin0316"><FaGithub className='w-12 md:w-16 p-3 rounded-full text-white hover:text-slate-800 hover:translate-y-[-10px] bg-red-400 hover:bg-red-500 transition-all'/></a></li>
            <li><a href="#"><FaLinkedinIn className='w-12 md:w-16 p-3 rounded-full text-white hover:text-slate-800 hover:translate-y-[-10px] bg-red-400 hover:bg-red-500 transition-all'/></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;