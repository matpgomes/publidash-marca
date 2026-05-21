"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Quanto custa?",
    a: "Zero pra marca. A Publidash cobra 10% do valor do acordo, descontado do creator. O preço que você combina é o preço que você paga.",
  },
  {
    q: "Preciso de time dedicado?",
    a: "Não. A plataforma é self-service. Crie uma campanha em 60 segundos, a Lia faz o resto. Você só decide quem aprovar.",
  },
  {
    q: "Como sei que os creators são confiáveis?",
    a: "Cada creator tem score de reputação baseado em entregas reais: taxa de aprovação, pontualidade, avaliações de marcas anteriores. A Lia prioriza creators com histórico comprovado.",
  },
  {
    q: "E se o creator não entregar?",
    a: "Seu dinheiro fica retido até você aprovar. Se não entregar, você abre disputa e um mediador humano resolve em até 5 dias úteis.",
  },
  {
    q: "Posso usar pra UGC e influência?",
    a: "Sim. Reels, Stories, posts, vídeos longos, UGC pra ads, lives — a plataforma cobre todos os formatos.",
  },
  {
    q: "Já tenho um creator em mente. Posso usar só pro pagamento?",
    a: "Sim. Convide direto e use a Publidash só pra contrato + pagamento garantido + NF. Taxa reduzida.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-ink-100"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-ink-900 pr-4 group-hover:text-violet-500 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`text-ink-400 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-ink-500 leading-relaxed pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 md:py-24 px-6 bg-paper border-b border-ink-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
