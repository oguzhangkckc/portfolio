/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from 'react-icons/ai';
import Image from 'next/image';
import { Link } from 'react-scroll';
import ogi from '../../images/ogi.png';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconSize, setIconSize] = useState(24);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(20);
      } else {
        setIconSize(24);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 p-3 flex items-center justify-between ${isScrolled ? 'bg-white shadow-lg transition duration-300' : ''}`}>
      <div className="flex items-center gap-4 pl-4">
        <Image src={ogi} width={iconSize * 3 / 2} height={iconSize * 3 / 2} className="rounded-full" />
        <Link to="me" spy={true} smooth={true} duration={500} className={`text-sm sm:text-xs md:text-xl font-extrabold dark:text-slate-300 hover:text-teal-500 transition-colors duration-300 ${isScrolled ? 'truncate' : ''}`}>
          Oğuzhan Gökcekoca
        </Link>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 font-extrabold dark:text-slate-300 text-sm md:text-xl list-none">
        <li>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-teal-500 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="more" spy={true} smooth={true} duration={500} className="hover:text-teal-500 transition-colors duration-300">
            More
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-teal-500 transition-colors duration-300">
            Contact
          </Link>
        </li>
      </div>
      <div className="flex flex-col items-center gap-2 md:flex-row md:gap-8">    
          <a href="https://www.linkedin.com/in/oğuzhan-gökcekoca-442802250/" className="dark:text-slate-300 hover:text-teal-500 transition-colors duration-300">
            <AiFillLinkedin size={iconSize} />
          </a>
          <a href="https://github.com/oguzhangkckc" className="dark:text-slate-300 hover:text-teal-500 transition-colors duration-300">
            <AiFillGithub size={iconSize} />
          </a>
          <a href="mailto:ogokcekoca@gmail.com" className="dark:text-slate-300 hover:text-teal-500 transition-colors duration-300">
            <AiFillMail size={iconSize} />
          </a>
          <a href="https://www.instagram.com/oguzhangokcekoca/" className="dark:text-slate-300 hover:text-teal-500 transition-colors duration-300">
            <AiFillInstagram size={iconSize} />
          </a>   
      </div>
    </nav>
  );
}
