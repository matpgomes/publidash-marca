"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-20 md:py-24 px-6 bg-gradient-to-b from-violet-50 to-cream border-b border-ink-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            Comece Agora
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-ink-900 mb-6">
            Pare de perder tempo.
            <br />
            Comece a encontrar.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-ink-500 mb-10"
        >
          Crie sua primeira campanha em 60 segundos. A Lia já está pronta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 h-12 px-6 bg-violet-500 hover:bg-violet-600 text-white font-sans font-medium text-sm rounded-[10px] hover:-translate-y-px hover:shadow-brand transition-all duration-150"
          >
            Criar minha primeira campanha
            <ArrowRight size={20} strokeWidth={1.5} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-sm text-ink-400"
        >
          Já tem conta?{" "}
          <a
            href="#"
            className="text-violet-500 hover:underline"
          >
            Entrar
          </a>
        </motion.p>
      </div>
    </section>
  );
}
