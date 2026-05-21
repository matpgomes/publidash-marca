"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    label: "Tempo pra encontrar creator",
    manual: "Dias/semanas",
    agency: "1-2 semanas",
    publidash: "Segundos (IA)",
  },
  {
    label: "Custo",
    manual: "Seu tempo",
    agency: "30%+ de comissão",
    publidash: "0% pra marca",
  },
  {
    label: "Contrato",
    manual: "Informal ou inexistente",
    agency: "Sim, mas genérico",
    publidash: "Automático, com CONAR e LGPD",
  },
  {
    label: "Pagamento",
    manual: "Adiantado, sem garantia",
    agency: "Via agência, sem transparência",
    publidash: "Retido no gateway até aprovação",
  },
  {
    label: "Nota fiscal",
    manual: "Você cobra do creator",
    agency: "Agência emite (nem sempre)",
    publidash: "Automática",
  },
  {
    label: "Se der problema",
    manual: "Boa sorte",
    agency: "\"Vamos resolver\" (talvez)",
    publidash: "Mediação humana com SLA",
  },
  {
    label: "Escala",
    manual: "1 por vez, manualmente",
    agency: "Lento e caro",
    publidash: "Lia monta o mix otimizado",
  },
];

function CellIcon({ type }: { type: "good" | "bad" | "meh" }) {
  if (type === "good")
    return <Check size={14} strokeWidth={2} className="text-green-600" />;
  if (type === "bad")
    return <X size={14} strokeWidth={2} className="text-coral-500" />;
  return <Minus size={14} strokeWidth={2} className="text-text-muted" />;
}

export default function Comparison() {
  return (
    <section className="py-20 md:py-32 px-6 bg-surface-1">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl text-center text-text-primary mb-16"
        >
          Compare e decida
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left text-sm font-medium text-text-muted pb-4 pr-4 w-1/4" />
                <th className="text-center text-sm font-medium text-text-muted pb-4 px-4 w-1/4">
                  Manual
                </th>
                <th className="text-center text-sm font-medium text-text-muted pb-4 px-4 w-1/4">
                  Agência
                </th>
                <th className="text-center text-sm font-medium text-text-primary pb-4 px-4 w-1/4 rounded-t-xl">
                  <span className="inline-flex items-center gap-1.5 bg-violet-500 text-white text-xs font-medium px-3 py-1 rounded-full">
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
                  className="border-t border-border"
                >
                  <td className="py-4 pr-4 text-sm font-medium text-text-primary">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="bad" />
                      <span className="text-sm text-text-muted">
                        {row.manual}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="meh" />
                      <span className="text-sm text-text-muted">
                        {row.agency}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center bg-violet-50">
                    <div className="flex items-center justify-center gap-2">
                      <CellIcon type="good" />
                      <span className="text-sm text-text-primary font-medium">
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
