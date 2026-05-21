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
    desc: "Não é busca com filtro. Você descreve o que precisa e a Lia interpreta: tom de voz, estética, audiência, histórico. Retorna os creators certos com justificativa explicável.",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento protegido",
    desc: "Você paga, o dinheiro fica retido no gateway regulado pelo BACEN. Só é liberado quando você aprovar a entrega — ou em 7 dias automaticamente.",
  },
  {
    icon: FileCheck,
    title: "Contrato automático",
    desc: "Contrato digital gerado automaticamente com cláusulas de direito de imagem, exclusividade, #publi obrigatório (CONAR) e LGPD. Assinatura eletrônica com validade jurídica.",
  },
  {
    icon: Receipt,
    title: "NF-e sem esforço",
    desc: "A nota fiscal do creator é gerada automaticamente no momento do pagamento. Você não precisa cobrar, lembrar ou conferir.",
  },
  {
    icon: TrendingUp,
    title: "Preço justo de mercado",
    desc: "A Lia sugere faixa de preço baseada em dados reais por nicho, formato e alcance. Você sabe exatamente quanto o mercado paga.",
  },
  {
    icon: Users,
    title: "Portfólio de creators",
    desc: "Precisa de 10 creators diversos? A Lia monta um mix otimizado: minimiza overlap de audiência, maximiza variação criativa, distribui risco.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-24 px-6 bg-cream border-b border-ink-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            Funcionalidades
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            Uma plataforma. Todo o fluxo. Zero burocracia.
          </h2>
        </motion.div>

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
                className="bg-paper rounded-[14px] border border-ink-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 bg-violet-50">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-violet-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
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
