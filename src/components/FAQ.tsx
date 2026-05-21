"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Quanto custa?",
    a: "Zero pra marca. A Publidash cobra 10% do valor do acordo, descontado do creator. O preco que voce combina e o preco que voce paga.",
  },
  {
    q: "Preciso de time dedicado?",
    a: "Nao. A plataforma e self-service. Crie uma campanha em 60 segundos, a Lia faz o resto. Voce so decide quem aprovar.",
  },
  {
    q: "Como sei que os creators sao confiaveis?",
    a: "Cada creator tem score de reputacao baseado em entregas reais: taxa de aprovacao, pontualidade, avaliacoes de marcas anteriores. A Lia prioriza creators com historico comprovado.",
  },
  {
    q: "E se o creator nao entregar?",
    a: "Seu dinheiro fica retido ate voce aprovar. Se nao entregar, voce abre disputa e um mediador humano resolve em ate 5 dias uteis.",
  },
  {
    q: "Posso usar pra UGC e influencia?",
    a: "Sim. Reels, Stories, posts, videos longos, UGC pra ads, lives — a plataforma cobre todos os formatos.",
  },
  {
    q: "Ja tenho um creator em mente. Posso usar so pro pagamento?",
    a: "Sim. Convide direto e use a Publidash so pra contrato + pagamento garantido + NF. Taxa reduzida.",
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
      className="border-b border-white/[0.06]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-medium text-[var(--cream)] pr-4 group-hover:text-[var(--violet-500)] transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          className={`text-[var(--cream)]/40 shrink-0 transition-transform duration-300 ${
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
            <p className="pb-5 text-sm text-[var(--cream)]/60 leading-relaxed pr-8">
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
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-center text-[var(--cream)] mb-12"
        >
          Perguntas frequentes
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
