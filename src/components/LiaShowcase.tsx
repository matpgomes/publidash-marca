"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Brain, BarChart3 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const fullPrompt =
  "Preciso de creators de skincare com vibe gente boa, que falem de rotina real sem filtro de glamour, audiência feminina 25-34 do Sudeste";

const results = [
  {
    name: "Maria Silva",
    handle: "@mariaskin",
    match: 97,
    justification:
      "Tom de voz alinhado: humor sutil sobre rotina real. 78% da audiência mulher 25-34 do Sudeste. Taxa de aprovação na 1ª revisão: 92%.",
  },
  {
    name: "Ana Cuidados",
    handle: "@cuidadocomana",
    match: 94,
    justification:
      "Portfólio forte em reels de skincare acessível. Audiência concentrada no Sudeste. Histórico de 5 campanhas concluídas, nota média 4.8.",
  },
];

const bullets = [
  {
    icon: Brain,
    text: "Não é filtro. É inteligência. A Lia lê portfólio, analisa tom de voz e cruza audiência.",
  },
  {
    icon: Sparkles,
    text: "Cada indicação vem com justificativa. Você sabe POR QUE aquele creator foi indicado.",
  },
  {
    icon: BarChart3,
    text: "Modo portfólio: peça 10 creators diversos e a Lia otimiza o mix pra maximizar resultado.",
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
      <span className="animate-pulse text-violet-500">|</span>
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
    <section className="py-20 md:py-24 px-6 bg-paper border-b border-ink-100" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-xs font-sans font-medium tracking-[0.16em] uppercase text-ink-500 flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-ink-500" />
            IA Lia
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            Conheça a Lia. Sua copiloto de Creator Economy.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-ink-400 mb-16 max-w-2xl mx-auto"
        >
          Inteligência artificial treinada para entender marcas, creators e o
          mercado brasileiro.
        </motion.p>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cream rounded-[14px] border border-ink-100 p-6 md:p-8 mb-16 shadow-sm"
        >
          {/* Lia header */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-lime-400 flex items-center justify-center">
              <Sparkles size={12} strokeWidth={1.5} className="text-white" />
            </div>
            <span className="text-sm font-medium text-ink-900">Lia</span>
            <span className="text-xs text-ink-400 font-mono">AI Engine v2</span>
          </div>

          {/* Input field */}
          <div className="bg-violet-50 rounded-[14px] p-4 border border-ink-50 mb-6">
            <p className="text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">
              {isInView ? (
                <TypingText text={fullPrompt} onComplete={() => setTypingDone(true)} />
              ) : null}
            </p>
          </div>

          {/* Results */}
          {showResults && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                <span className="text-xs font-mono text-ink-400">
                  2 resultados em 0.8s
                </span>
              </div>

              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.5 }}
                  className="bg-paper rounded-[14px] border border-ink-100 p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-coral-500" />
                      <div>
                        <p className="font-medium text-ink-900">
                          {result.name}
                        </p>
                        <p className="text-xs text-ink-400">
                          {result.handle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-ink-400">Match</p>
                      <p className="font-mono text-lg font-bold text-violet-500">
                        {result.match}%
                      </p>
                    </div>
                  </div>
                  <div className="bg-violet-50 rounded-[10px] p-3 border border-violet-100">
                    <p className="text-xs text-ink-400 mb-1 font-mono">
                      Justificativa da Lia:
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">
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
                  className="text-violet-500 shrink-0 mt-0.5"
                />
                <p className="text-sm text-ink-500 leading-relaxed">
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
