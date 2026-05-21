"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-violet-50 to-background"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-6xl text-text-primary mb-6"
        >
          Pare de perder tempo.
          <br />
          Comece a encontrar.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-secondary mb-10"
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
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-medium text-lg px-10 py-5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/25"
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
          className="mt-6 text-sm text-text-muted"
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
