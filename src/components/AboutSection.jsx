import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-50">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Aulas Presenciais e Online
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        {/* Texto */}
        <motion.div
          className="md:flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed">
            Na <span className="font-bold text-indigo-600">Hybrid</span>, você aprende música de forma prática.
          </p>
          <p className="text-md sm:text-lg text-gray-600 mt-3">
            Venha trilhar seu caminho musical com a gente!
          </p>
          <p className="mt-6 italic text-gray-700 text-md sm:text-lg">
            Com anos de experiência e muita paixão pela música,<br className="hidden sm:inline" />
            transformamos aprendizado em diversão e evolução real.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          className="md:flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/teste.jpg"
            alt="Professor de Música"
            width={280}
            height={280}
            className="rounded-full shadow-xl object-cover border-4 border-indigo-300 w-64 h-64 sm:w-72 sm:h-72"
          />
        </motion.div>
      </div>
    </section>
  );
}
