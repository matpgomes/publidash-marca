"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Search,
    text: "Você perde horas scrollando perfis, pedindo midiakit, comparando números que podem ser falsos.",
  },
  {
    icon: MessageCircle,
    text: "Negocia por DM, manda briefing por email, torce pra entrega chegar no prazo e na qualidade.",
  },
  {
    icon: AlertTriangle,
    text: "Paga adiantado e reza. Se der errado, não tem a quem recorrer.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-24 px-6 bg-cream border-b border-ink-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            O Problema
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            Contratar creators não deveria ser tão difícil
          </h2>
        </motion.div>

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
                className="bg-paper rounded-[14px] border border-ink-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-coral-500 mb-4"
                />
                <p className="text-ink-500 leading-relaxed">
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
          className="text-center mt-12 text-lg text-violet-500 font-medium"
        >
          E se tivesse um jeito mais inteligente?
        </motion.p>
      </div>
    </section>
  );
}
