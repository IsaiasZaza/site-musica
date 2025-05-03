import { FaKeyboard, FaGuitar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function CursosSection() {
  const courses = [
    {
      title: 'Curso de Teclado',
      icon: <FaKeyboard className="text-5xl text-indigo-400 mb-4" />,
      description: 'Aprenda escalas, acordes e técnicas do teclado do zero.',
      level: 'Iniciante a Intermediário',
      link: '/teclado'
    },
    {
      title: 'Curso de Violão',
      icon: <FaGuitar className="text-5xl text-indigo-400 mb-4" />,
      description: 'Domine acordes, dedilhados e repertório popular.',
      level: 'Iniciante a Intermediário',
      link: '/violao'
    }
  ];

  return (
    <section id="courses" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Aulas e Conteúdos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            className="p-8 bg-gray-800 rounded-3xl shadow-xl text-center hover:shadow-indigo-500/30 transition duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{course.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
            <p className="text-gray-300 mb-3">{course.description}</p>
            <p className="text-sm text-indigo-300 mb-5">
              <span className="font-semibold text-white">Nível:</span> {course.level}
            </p>
            <a
              href={course.link}
              className="inline-block px-6 py-2 text-white bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 transition"
            >
              Ver detalhes
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
