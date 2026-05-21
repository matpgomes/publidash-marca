"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CreatorCard({
  name,
  handle,
  match,
  tags,
  delay,
}: {
  name: string;
  handle: string;
  match: number;
  tags: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-surface-1 rounded-xl border border-border p-4 flex items-start gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-coral-500 shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-text-primary">{name}</p>
            <p className="text-xs text-text-muted">{handle}</p>
          </div>
          <span className="font-mono text-sm font-bold text-violet-500">
            {match}%
          </span>
        </div>
        <div className="flex gap-1.5 mt-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-1">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-transparent to-lime-50/30" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-text-primary"
          >
            Encontre o creator certo em{" "}
            <em className="text-violet-500">segundos</em>, não em
            semanas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
          >
            Descreva o que você precisa em linguagem natural. A IA Lia analisa
            milhares de perfis e te entrega os creators que mais combinam com
            sua marca — com justificativa de cada escolha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-medium text-base px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Criar minha primeira campanha
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-border text-text-primary font-medium text-base px-8 py-4 rounded-lg transition-all hover:bg-violet-50"
            >
              Ver como funciona
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-sm text-text-muted"
          >
            Sem mensalidade. Pague só quando fechar um acordo.
          </motion.p>
        </div>

        {/* Right: AI mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-background rounded-2xl border border-border p-6 shadow-sm"
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-lime-400" />
            <span className="text-xs font-mono text-text-muted">
              Lia AI — Resultados do matchmaking
            </span>
          </div>

          {/* Search prompt */}
          <div className="bg-surface-2 rounded-lg p-3 mb-4 border border-border-subtle">
            <p className="text-sm text-text-secondary">
              &quot;Preciso de creators de skincare com vibe autêntica, audiência
              feminina 25-34 do Sudeste&quot;
            </p>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <CreatorCard
              name="Maria Silva"
              handle="@mariaskin"
              match={97}
              tags={["Skincare", "Sudeste", "25-34F"]}
              delay={0.8}
            />
            <CreatorCard
              name="Ana Cuidados"
              handle="@cuidadocomana"
              match={94}
              tags={["Rotina real", "Micro", "SP"]}
              delay={1.0}
            />
            <CreatorCard
              name="Bia Derma"
              handle="@biaderma"
              match={91}
              tags={["Pele real", "Nano", "RJ"]}
              delay={1.2}
            />
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between">
            <span className="text-xs text-text-muted">
              3 de 47 creators compatíveis
            </span>
            <span className="text-xs font-mono text-violet-500">
              0.8s
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
