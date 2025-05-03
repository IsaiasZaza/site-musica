import { FaPlayCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen text-white overflow-hidden">
            {/* Fundo com vídeo do YouTube */}
            <div className="absolute inset-0 z-0">
                <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/qEvkbuhOxyc?autoplay=1&mute=1&loop=1&playlist=qEvkbuhOxyc&controls=0&modestbranding=1&showinfo=0"
                    title="Apresentação da Hybrid"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Conteúdo principal */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold text-white bg-indigo-700/80 p-4 rounded-xl shadow-xl backdrop-blur-sm"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Bem-vindo à Hybrid
                </motion.h1>

                <motion.h2
                    className="mt-4 text-xl md:text-3xl font-semibold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Suas Aulas de <span className="text-indigo-300">Violão</span> e <span className="text-indigo-300">Teclado</span> de um jeito moderno
                </motion.h2>

                {/* Botões */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <motion.a
                        href="#courses"
                        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Comece agora
                    </motion.a>

                    <motion.a
                        href="https://www.youtube.com/watch?v=qEvkbuhOxyc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black font-semibold border border-white rounded-lg shadow-md hover:bg-gray-100 transition flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FaPlayCircle /> Assista uma prévia
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
