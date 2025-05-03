import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 text-center bg-gray-50">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Aulas Presenciais e Online
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-2xl text-gray-800 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Na <span className="font-bold text-indigo-600">Hybrid</span>, você aprende música de forma prática e divertida.
          <br />
          <span className="text-lg text-gray-600 block mt-2">
            Venha trilhar seu caminho musical com a gente!
          </span>
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/teste.jpg"
            alt="Professor de Música"
            width={300}
            height={300}
            className="rounded-full shadow-xl object-cover border-4 border-indigo-300"
          />
        </motion.div>

        <motion.p
          className="mt-8 italic text-gray-700 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Com anos de experiência e muita paixão pela música,
          <br className="hidden md:inline" />
          transformamos aprendizado em diversão e evolução real.
        </motion.p>
      </div>
    </section>
  );
}
