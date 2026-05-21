"use client";

import { motion } from "framer-motion";
import { PenLine, Sparkles, Handshake, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Descreva o que precisa",
    desc: "Escreva seu briefing em linguagem natural: 'Preciso de 3 creators de skincare com vibe autêntica, audiência feminina 25-34 do Sudeste.' A Lia entende.",
  },
  {
    icon: Sparkles,
    title: "A Lia encontra os melhores",
    desc: "A IA analisa portfólio, tom de voz, métricas reais e audiência. Te entrega uma lista curada com score de compatibilidade e justificativa de cada match.",
  },
  {
    icon: Handshake,
    title: "Negocie e feche",
    desc: "Chat direto com o creator. Proposta, contraproposta, acordo. O contrato sai automático com cláusulas CONAR e LGPD. Assinatura eletrônica.",
  },
  {
    icon: ShieldCheck,
    title: "Pague com segurança",
    desc: "Seu pagamento fica retido no gateway até você aprovar a entrega. Aprovou? Pix na conta do creator + NF-e automática. Tudo resolvido.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-24 px-6 bg-paper border-b border-ink-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            Como Funciona
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            Do briefing ao Pix em 4 passos
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-ink-100" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center mb-6 relative z-10">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-violet-500"
                  />
                </div>
                <span className="font-mono text-xs text-ink-400 mb-2">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-violet-500"
                    />
                  </div>
                  {i < 3 && (
                    <div className="w-px flex-1 bg-ink-100 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="font-mono text-xs text-ink-400">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 h-12 px-6 bg-violet-500 hover:bg-violet-600 text-white font-sans font-medium text-sm rounded-[10px] hover:-translate-y-px hover:shadow-brand transition-all duration-150"
          >
            Criar minha primeira campanha
            <ArrowRight size={18} strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
