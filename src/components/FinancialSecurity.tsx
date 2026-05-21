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
  { icon: CreditCard, label: "Você paga" },
  { icon: Lock, label: "Retido no gateway (Asaas/BACEN)" },
  { icon: Package, label: "Creator entrega" },
  { icon: CheckCircle2, label: "Você aprova" },
  { icon: Banknote, label: "Creator recebe via Pix" },
  { icon: FileText, label: "NF-e gerada" },
];

export default function FinancialSecurity() {
  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl text-center text-text-primary mb-16"
        >
          Seu dinheiro só sai quando você aprova
        </motion.h2>

        {/* Escrow timeline - Desktop */}
        <div className="hidden md:block mb-16">
          <div className="flex items-start justify-between relative">
            {/* Connector */}
            <div className="absolute top-6 left-[8%] right-[8%] h-px bg-border" />

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
                  <div className="w-12 h-12 rounded-full bg-surface-1 border border-border flex items-center justify-center mb-3 shadow-sm">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-violet-500"
                    />
                  </div>
                  <p className="text-xs text-text-secondary leading-snug max-w-[100px]">
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
                  <div className="w-10 h-10 rounded-full bg-surface-1 border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-violet-500"
                    />
                  </div>
                  {i < escrowSteps.length - 1 && (
                    <div className="w-px h-4 bg-border" />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{step.label}</p>
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
            className="bg-surface-1 rounded-2xl border border-border p-5 shadow-sm"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              Se você não aprovar nem reprovar em 7 dias, o sistema aprova
              automaticamente.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-1 rounded-2xl border border-border p-5 shadow-sm"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              Se houver problema, qualquer parte pode abrir disputa. Mediação
              humana com resolução em até 5 dias úteis.
            </p>
          </motion.div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-violet-50 rounded-2xl border border-violet-100 p-6 text-center"
        >
          <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Você não paga a Publidash. A gente fica com{" "}
            <span className="font-mono font-bold text-violet-500">
              10%
            </span>{" "}
            do valor do acordo — descontado do creator. Pra você, o preço é o
            que você combinou.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
