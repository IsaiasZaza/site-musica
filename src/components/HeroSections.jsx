import { FaPlayCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen text-white overflow-hidden">
      {/* Background vídeo do YouTube */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/qEvkbuhOxyc?autoplay=1&mute=1&loop=1&playlist=qEvkbuhOxyc&controls=0&modestbranding=1&showinfo=0"
          title="Apresentação da Hybrid"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white bg-indigo-700/80 px-6 py-4 rounded-xl shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bem-vindo à Hybrid
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl text-white bg-black/40 px-6 py-4 rounded-lg backdrop-blur-sm shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Aulas personalizadas de violão e teclado, presenciais ou online, com Pablo Rafael —
          músico experiente com influências do Rock ao Blues.
        </motion.p>

        {/* Botões responsivos */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <motion.a
            href="https://wa.me/5562991670219?text=Ol%C3%A1%21%20%F0%9F%98%8A%0AGostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20Hybrid.%20Pode%20me%20ajudar%2C%20por%20favor%3F"
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition text-center"
            whileHover={{ scale: 1.05 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comece agora
          </motion.a>

          <motion.a
            href="https://www.youtube.com/watch?v=qEvkbuhOxyc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold border border-white rounded-lg shadow-md hover:bg-gray-100 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaPlayCircle /> Assista uma prévia
          </motion.a>
        </div>
      </div>
    </section>
  );
}
