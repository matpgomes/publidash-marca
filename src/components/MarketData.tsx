"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    value: "US$ 5,47 bi",
    numericTarget: 5.47,
    prefix: "US$ ",
    suffix: " bi",
    decimals: 2,
    label: "Creator Economy Brasil 2025",
  },
  {
    value: "~22% ao ano",
    numericTarget: 22,
    prefix: "~",
    suffix: "%",
    decimals: 0,
    label: "Crescimento projetado (CAGR)",
    extra: "ao ano",
  },
  {
    value: "92%",
    numericTarget: 92,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Marcas que planejam usar micro/nano em 2026",
  },
  {
    value: "4-8%",
    numericTarget: 6,
    prefix: "4-",
    suffix: "%",
    decimals: 0,
    label: "Engajamento médio nano (<10k) vs <1,5% dos grandes",
    isRange: true,
  },
  {
    value: "61%",
    numericTarget: 61,
    prefix: "",
    suffix: "%",
    decimals: 0,
    label: "Marcas que vão aumentar investimento em 2026",
  },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  decimals,
  isRange,
  extra,
  shouldAnimate,
}: {
  target: number;
  prefix: string;
  suffix: string;
  decimals: number;
  isRange?: boolean;
  extra?: string;
  shouldAnimate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldAnimate, target]);

  if (isRange) {
    return (
      <span className="font-mono text-3xl md:text-4xl font-bold text-ink-900">
        4-8%
      </span>
    );
  }

  return (
    <span className="font-mono text-3xl md:text-4xl font-bold text-ink-900">
      {prefix}
      {decimals > 0
        ? count.toFixed(decimals).replace(".", ",")
        : Math.round(count)}
      {suffix}
      {extra && (
        <span className="text-base font-normal text-ink-400 ml-1">
          {extra}
        </span>
      )}
    </span>
  );
}

export default function MarketData() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 px-6 bg-cream border-b border-ink-100" ref={ref}>
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
            Dados de Mercado
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-ink-900">
            O mercado está pedindo isso
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-ink-500 mb-16 max-w-2xl mx-auto"
        >
          Nano e micro creators convertem mais, custam menos e geram conteúdo mais autêntico. A Lia sabe achar os melhores pra você.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper rounded-[14px] border border-ink-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <AnimatedCounter
                target={stat.numericTarget}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
                isRange={stat.value === "4-8%"}
                extra={stat.extra}
                shouldAnimate={isInView}
              />
              <p className="text-sm text-ink-500 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
