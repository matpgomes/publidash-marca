"use client";

import { motion } from "framer-motion";

const cases = [
  {
    brand: "Marca de Beleza",
    quote: "Em 3 dias encontramos 12 creators perfeitos pro nosso lançamento. Antes levava semanas.",
    person: "Fernanda S.",
    role: "Head de Marketing",
    metric: "12 creators em 3 dias",
    metricLabel: "Velocidade",
  },
  {
    brand: "E-commerce de Moda",
    quote: "O custo por asset caiu 40% comparado com agência. E a qualidade do conteúdo subiu.",
    person: "Ricardo L.",
    role: "Founder & CEO",
    metric: "40% menos custo",
    metricLabel: "Economia vs agência",
  },
  {
    brand: "Marca de Fitness",
    quote: "A Lia acertou em cheio o perfil dos creators. O engajamento foi 3x maior que campanhas anteriores.",
    person: "Juliana M.",
    role: "Social Media Manager",
    metric: "3x mais engajamento",
    metricLabel: "Performance",
  },
];

export default function Cases() {
  return (
    <section className="py-20 md:py-24 px-6 bg-paper relative z-[2] border-b border-ink-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            Cases
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink-900 leading-tight mb-4">
            Marcas que já usam
          </h2>
          <p className="text-lg text-ink-500 max-w-xl leading-relaxed">
            Resultados reais de marcas que simplificaram sua operação com creators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-paper border border-ink-100 rounded-[14px] p-7 flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Metric highlight */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-lime-50 text-ink-900 px-3 py-1.5 rounded-[6px] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  <span className="font-mono text-sm font-semibold">{c.metric}</span>
                </div>
                <p className="text-xs text-ink-400 font-sans mt-1">{c.metricLabel}</p>
              </div>

              <p className="text-ink-900 text-base leading-relaxed mb-8 font-sans">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-ink-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-coral-500 flex items-center justify-center text-white text-sm font-semibold">
                  {c.person.charAt(0)}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-ink-900">{c.person}</p>
                  <p className="font-sans text-xs text-ink-400">{c.role} · {c.brand}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
