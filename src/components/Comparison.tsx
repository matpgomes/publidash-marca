"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Tempo",
    manual: "Dias/semanas",
    agency: "1-2 semanas",
    publidash: "Segundos (IA)",
  },
  {
    label: "Custo",
    manual: "Seu tempo",
    agency: "30%+ de comissao",
    publidash: "0% pra marca",
  },
  {
    label: "Contrato",
    manual: "Informal",
    agency: "Generico",
    publidash: "Automatico, CONAR + LGPD",
  },
  {
    label: "Pagamento",
    manual: "Adiantado, sem garantia",
    agency: "Via agencia",
    publidash: "Retido ate aprovacao",
  },
  {
    label: "Nota fiscal",
    manual: "Voce cobra",
    agency: "Nem sempre",
    publidash: "Automatica",
  },
  {
    label: "Se der problema",
    manual: "Boa sorte",
    agency: "Talvez",
    publidash: "Mediacao humana com SLA",
  },
  {
    label: "Escala",
    manual: "1 por vez",
    agency: "Lento e caro",
    publidash: "Lia monta o mix",
  },
];

function CellIcon({ type }: { type: "good" | "bad" | "meh" }) {
  if (type === "good")
    return <Check size={14} strokeWidth={1.5} className="text-[var(--lime-300)]" />;
  if (type === "bad")
    return <X size={14} strokeWidth={1.5} className="text-[var(--coral-500)]" />;
  return <Minus size={14} strokeWidth={1.5} className="text-[var(--cream)]/30" />;
}

export default function Comparison() {
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
          Compare e decida
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-[var(--cream)]/40 pb-4 pr-4 w-1/4" />
                <th className="text-center text-sm font-medium text-[var(--cream)]/40 pb-4 px-4 w-1/4">
                  Manual
                </th>
                <th className="text-center text-sm font-medium text-[var(--cream)]/40 pb-4 px-4 w-1/4">
                  Agencia
                </th>
                <th className="text-center text-sm font-medium text-[var(--cream)] pb-4 px-4 w-1/4 rounded-t-xl">
                  <span className="inline-flex items-center gap-1.5 bg-[var(--violet-500)] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Publidash
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-white/[0.04]"
                >
                  <td className="py-4 pr-4 text-sm font-medium text-[var(--cream)]/70">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="bad" />
                      <span className="text-sm text-[var(--cream)]/40">
                        {row.manual}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="meh" />
                      <span className="text-sm text-[var(--cream)]/40">
                        {row.agency}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center bg-[var(--violet-500)]/5">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="good" />
                      <span className="text-sm text-[var(--cream)] font-medium">
                        {row.publidash}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
