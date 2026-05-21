"use client";

import { Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-xl text-[var(--cream)]">
              Publidash
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--cream)]/50">
            <a href="#" className="hover:text-[var(--cream)] transition-colors">
              Sobre
            </a>
            <a href="#" className="hover:text-[var(--cream)] transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-[var(--cream)] transition-colors">
              Politica de Privacidade
            </a>
            <a href="#" className="hover:text-[var(--cream)] transition-colors">
              Contato
            </a>
            <a
              href="#"
              className="text-[var(--coral-500)] hover:text-[var(--coral-500)]/80 transition-colors"
            >
              E creator? Clique aqui
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[var(--cream)]/40 hover:text-[var(--cream)] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[var(--cream)]/40 hover:text-[var(--cream)] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-[var(--cream)]/30">
            Publidash Tecnologia Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
