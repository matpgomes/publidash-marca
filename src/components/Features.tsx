"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  FileCheck,
  Receipt,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "IA Matchmaking (Lia)",
    desc: "Nao e busca com filtro. Voce descreve o que precisa e a Lia interpreta: tom de voz, estetica, audiencia, historico. Retorna os creators certos com justificativa explicavel.",
    accent: "var(--violet-500)",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento protegido",
    desc: "Voce paga, o dinheiro fica retido no gateway regulado pelo BACEN. So e liberado quando voce aprovar a entrega — ou em 7 dias automaticamente.",
    accent: "var(--lime-300)",
  },
  {
    icon: FileCheck,
    title: "Contrato automatico",
    desc: "Contrato digital gerado automaticamente com clausulas de direito de imagem, exclusividade, #publi obrigatorio (CONAR) e LGPD. Assinatura eletronica.",
    accent: "var(--violet-500)",
  },
  {
    icon: Receipt,
    title: "NF-e sem esforco",
    desc: "A nota fiscal do creator e gerada automaticamente no momento do pagamento. Voce nao precisa cobrar, lembrar ou conferir.",
    accent: "var(--coral-500)",
  },
  {
    icon: TrendingUp,
    title: "Preco justo de mercado",
    desc: "A Lia sugere faixa de preco baseada em dados reais por nicho, formato e alcance. Voce sabe exatamente quanto o mercado paga.",
    accent: "var(--lime-300)",
  },
  {
    icon: Users,
    title: "Portfolio de creators",
    desc: "Precisa de 10 creators diversos? A Lia monta um mix otimizado: minimiza overlap de audiencia, maximiza variacao criativa, distribui risco.",
    accent: "var(--coral-500)",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 px-6 bg-[var(--surface-1)]/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-center text-[var(--cream)] mb-16"
        >
          Uma plataforma. Todo o fluxo. Zero burocracia.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--ink-1000)] rounded-xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `color-mix(in srgb, ${feat.accent} 15%, transparent)` }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: feat.accent }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[var(--cream)]/60 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
