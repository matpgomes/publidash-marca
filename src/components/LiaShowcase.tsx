"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Brain, BarChart3 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const fullPrompt =
  "Preciso de creators de skincare com vibe gente boa, que falem de rotina real sem filtro de glamour, audiencia feminina 25-34 do Sudeste";

const results = [
  {
    name: "Maria Silva",
    handle: "@mariaskin",
    match: 97,
    justification:
      "Tom de voz alinhado: humor sutil sobre rotina real. 78% da audiencia mulher 25-34 do Sudeste. Taxa de aprovacao na 1a revisao: 92%.",
  },
  {
    name: "Ana Cuidados",
    handle: "@cuidadocomana",
    match: 94,
    justification:
      "Conteudo focado em rotina acessivel sem filtro. 71% audiencia feminina faixa 25-34. Engajamento medio 6.2%. Historico de 14 campanhas com 100% entrega no prazo.",
  },
];

const bullets = [
  {
    icon: Brain,
    text: "Nao e filtro. E inteligencia. A Lia le portfolio, analisa tom de voz e cruza audiencia.",
  },
  {
    icon: Sparkles,
    text: "Cada indicacao vem com justificativa. Voce sabe POR QUE aquele creator foi indicado.",
  },
  {
    icon: BarChart3,
    text: "Modo portfolio: peca 10 creators diversos e a Lia otimiza o mix pra maximizar resultado.",
  },
];

function TypingText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-[var(--violet-500)]">|</span>
    </span>
  );
}

export default function LiaShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [typingDone, setTypingDone] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (typingDone) {
      const timeout = setTimeout(() => setShowResults(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [typingDone]);

  return (
    <section className="py-20 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl text-center text-[var(--cream)] mb-4"
        >
          Conheca a Lia. Sua copiloto de Creator Economy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[var(--cream)]/50 mb-16 max-w-2xl mx-auto"
        >
          Inteligencia artificial treinada para entender marcas, creators e o
          mercado brasileiro.
        </motion.p>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--surface-1)] rounded-2xl border border-white/[0.06] p-6 md:p-8 mb-16"
        >
          {/* Lia header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--violet-500)] to-[var(--lime-300)] flex items-center justify-center">
              <Sparkles size={12} strokeWidth={1.5} className="text-[var(--ink-1000)]" />
            </div>
            <span className="text-sm font-medium text-[var(--cream)]">Lia</span>
            <span className="text-xs text-[var(--cream)]/30 font-mono">AI Engine v2</span>
          </div>

          {/* Input field */}
          <div className="bg-[var(--ink-1000)] rounded-xl p-4 border border-white/[0.06] mb-6">
            <p className="text-sm text-[var(--cream)]/80 leading-relaxed min-h-[2.5rem]">
              {isInView ? (
                <TypingText text={fullPrompt} onComplete={() => setTypingDone(true)} />
              ) : null}
            </p>
          </div>

          {/* Results */}
          {showResults && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--lime-300)] animate-pulse" />
                <span className="text-xs font-mono text-[var(--cream)]/40">
                  2 resultados em 0.8s
                </span>
              </div>

              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.5 }}
                  className="bg-[var(--surface-2)] rounded-xl border border-white/[0.06] p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--violet-500)] to-[var(--coral-500)]" />
                      <div>
                        <p className="font-medium text-[var(--cream)]">
                          {result.name}
                        </p>
                        <p className="text-xs text-[var(--cream)]/40">
                          {result.handle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[var(--cream)]/40">Match</p>
                      <p className="font-mono text-lg font-bold text-[var(--lime-300)]">
                        {result.match}%
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--ink-1000)] rounded-lg p-3 border border-white/[0.04]">
                    <p className="text-xs text-[var(--cream)]/50 mb-1 font-mono">
                      Justificativa da Lia:
                    </p>
                    <p className="text-sm text-[var(--cream)]/70 leading-relaxed">
                      {result.justification}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bullets.map((bullet, i) => {
            const Icon = bullet.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-3"
              >
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[var(--violet-500)] shrink-0 mt-0.5"
                />
                <p className="text-sm text-[var(--cream)]/70 leading-relaxed">
                  {bullet.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
