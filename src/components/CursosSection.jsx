import { FaKeyboard, FaGuitar, FaFilePdf, FaCalendarCheck } from 'react-icons/fa';
import { LuKeyboardMusic } from "react-icons/lu";
import { motion } from 'framer-motion';

export default function CursosSection() {
  const courses = [
    {
      title: 'Curso de Teclado',
      icon: <LuKeyboardMusic  className="text-5xl text-indigo-400 mb-6" />,
      description: 'Aprenda escalas, acordes e técnicas do teclado do zero.',
      level: 'Iniciante a Intermediário',
      link: '/teclado',
    },
    {
      title: 'Curso de Violão',
      icon: <FaGuitar className="text-5xl text-indigo-400 mb-6" />,
      description: 'Domine acordes, dedilhados e repertório popular.',
      level: 'Iniciante a Intermediário',
      link: '/violao',
    },
  ];

  return (
    <section id="courses" className="py-20 px-6 text-white">
      {/* Título com animação */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Aulas e Conteúdos
      </motion.h2>

      {/* Cards com animação de entrada suave */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            className="p-8 rounded-3xl shadow-lg text-center hover:shadow-indigo-500/40 transition duration-300 bg-gradient-to-b from-black via-gray-900 to-black shadow-white"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex justify-center mb-4">{course.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
            <p className="text-gray-300 mb-4">{course.description}</p>

            <div className="text-sm text-indigo-300 mb-5">
              <p>
                <span className="font-semibold text-white">Nível:</span> {course.level}
              </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-gray-300 text-sm mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarCheck className="text-indigo-400" />
                <span>Acompanhamento semanal</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFilePdf className="text-indigo-400" />
                <span>PDF com conteúdo das aulas</span>
              </div>
            </div>

            <a
              href="https://wa.me/5562991670219?text=Ol%C3%A1%21%20%F0%9F%98%8A%0AGostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20Hybrid.%20Pode%20me%20ajudar%2C%20por%20favor%3F"
              className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar em contato
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
