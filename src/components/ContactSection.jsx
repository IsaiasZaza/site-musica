import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Entre em Contato
          </h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            Ficou com dúvidas ou quer saber mais? Mande uma mensagem no WhatsApp
            ou siga nas redes sociais para acompanhar as novidades.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5561986183812"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg transition"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-5 py-3 rounded-xl shadow-lg transition"
            >
              <FaInstagram className="text-2xl" />
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Foto do dono */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/rafa.jpg"
            alt="Foto do professor"
            className="w-72 h-72 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
