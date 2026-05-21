"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Search,
    text: "Voce perde horas scrollando perfis, pedindo midiakit, comparando numeros que podem ser falsos.",
  },
  {
    icon: MessageCircle,
    text: "Negocia por DM, manda briefing por email, torce pra entrega chegar no prazo e na qualidade.",
  },
  {
    icon: AlertTriangle,
    text: "Paga adiantado e reza. Se der errado, nao tem a quem recorrer.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-center text-[var(--cream)] mb-16"
        >
          Contratar creators nao deveria ser tao dificil
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[var(--surface-1)] rounded-xl border border-white/[0.06] p-6"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-[var(--coral-500)] mb-4"
                />
                <p className="text-[var(--cream)]/80 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-lg text-[var(--violet-500)] font-medium"
        >
          E se tivesse um jeito mais inteligente?
        </motion.p>
      </div>
    </section>
  );
}
