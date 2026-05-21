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
      className="bg-[var(--surface-2)] rounded-xl border border-white/[0.06] p-4 flex items-start gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--violet-500)] to-[var(--coral-500)] shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[var(--cream)]">{name}</p>
            <p className="text-xs text-[var(--cream)]/50">{handle}</p>
          </div>
          <span className="font-mono text-sm font-bold text-[var(--lime-300)]">
            {match}%
          </span>
        </div>
        <div className="flex gap-1.5 mt-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-[var(--cream)]/60"
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--violet-500)]/10 via-transparent to-[var(--coral-500)]/5" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-[var(--cream)]"
          >
            Encontre o creator certo em{" "}
            <em className="text-[var(--violet-500)]">segundos</em>, nao em
            semanas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-[var(--cream)]/70 max-w-xl leading-relaxed"
          >
            Descreva o que voce precisa em linguagem natural. A IA Lia analisa
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
              className="inline-flex items-center justify-center gap-2 bg-[var(--violet-500)] hover:bg-[var(--violet-600)] text-white font-medium text-base px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--violet-500)]/25"
            >
              Criar minha primeira campanha
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-[var(--cream)] font-medium text-base px-8 py-4 rounded-lg transition-all hover:bg-white/[0.04]"
            >
              Ver como funciona
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-sm text-[var(--cream)]/40"
          >
            Sem mensalidade. Pague so quando fechar um acordo.
          </motion.p>
        </div>

        {/* Right: AI mockup */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[var(--surface-1)] rounded-2xl border border-white/[0.06] p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--lime-300)]" />
            <span className="text-xs font-mono text-[var(--cream)]/50">
              Lia AI — Resultados do matchmaking
            </span>
          </div>

          {/* Search prompt */}
          <div className="bg-[var(--ink-1000)] rounded-lg p-3 mb-4 border border-white/[0.06]">
            <p className="text-sm text-[var(--cream)]/60">
              &quot;Preciso de creators de skincare com vibe autentica, audiencia
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
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-[var(--cream)]/40">
              3 de 47 creators compativeis
            </span>
            <span className="text-xs font-mono text-[var(--violet-500)]">
              0.8s
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
