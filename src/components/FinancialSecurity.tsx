"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Lock,
  Package,
  CheckCircle2,
  Banknote,
  FileText,
} from "lucide-react";

const escrowSteps = [
  { icon: CreditCard, label: "Voce paga" },
  { icon: Lock, label: "Retido no gateway (BACEN)" },
  { icon: Package, label: "Creator entrega" },
  { icon: CheckCircle2, label: "Voce aprova" },
  { icon: Banknote, label: "Creator recebe via Pix" },
  { icon: FileText, label: "NF-e gerada" },
];

export default function FinancialSecurity() {
  return (
    <section className="py-20 md:py-32 px-6 bg-[var(--surface-1)]/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-center text-[var(--cream)] mb-16"
        >
          Seu dinheiro so sai quando voce aprova
        </motion.h2>

        {/* Escrow timeline - Desktop */}
        <div className="hidden md:block mb-16">
          <div className="flex items-start justify-between relative">
            {/* Connector */}
            <div className="absolute top-6 left-[8%] right-[8%] h-px bg-white/[0.08]" />

            {escrowSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative z-10 w-1/6"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--ink-1000)] border border-white/[0.08] flex items-center justify-center mb-3">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[var(--violet-500)]"
                    />
                  </div>
                  <p className="text-xs text-[var(--cream)]/70 leading-snug max-w-[100px]">
                    {step.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Escrow timeline - Mobile */}
        <div className="md:hidden mb-16 space-y-4">
          {escrowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--ink-1000)] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-[var(--violet-500)]"
                    />
                  </div>
                  {i < escrowSteps.length - 1 && (
                    <div className="w-px h-4 bg-white/[0.06]" />
                  )}
                </div>
                <p className="text-sm text-[var(--cream)]/70">{step.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Extra details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--ink-1000)] rounded-xl border border-white/[0.06] p-5"
          >
            <p className="text-sm text-[var(--cream)]/70 leading-relaxed">
              Se voce nao aprovar nem reprovar em 7 dias, o sistema aprova
              automaticamente.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--ink-1000)] rounded-xl border border-white/[0.06] p-5"
          >
            <p className="text-sm text-[var(--cream)]/70 leading-relaxed">
              Se houver problema, qualquer parte pode abrir disputa. Mediacao
              humana com resolucao em ate 5 dias uteis.
            </p>
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[var(--violet-500)]/10 to-[var(--lime-300)]/5 rounded-xl border border-[var(--violet-500)]/20 p-6 text-center"
        >
          <p className="text-sm text-[var(--cream)]/80 leading-relaxed max-w-2xl mx-auto">
            Voce nao paga a Publidash. A gente fica com{" "}
            <span className="font-mono font-bold text-[var(--lime-300)]">
              10%
            </span>{" "}
            do valor do acordo — descontado do creator. Pra voce, o preco e o
            que voce combinou.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
