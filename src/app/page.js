"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlay, FaPlayCircle, FaGuitar, FaKeyboard } from 'react-icons/fa';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import CursosSection from '@/components/CursosSection';
import HeroSection from '@/components/HeroSections';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <AboutSection />
      <div className='bg-black w-full  flex items-center justify-center'>
        <CursosSection />
      </div>
      <ContactSection />

      <Footer />
    </main>
  );
}


function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-4 text-center">
      <p className="text-sm md:text-base text-gray-300">
        Feito com carinho por <span className="font-semibold text-white">Isaias</span> ao som de Oficina G3.
        <br className="block md:hidden" /> Todos os direitos reservados.
      </p>
    </footer>
  );
}
