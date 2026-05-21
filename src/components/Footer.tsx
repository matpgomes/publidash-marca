"use client";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 py-12 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-xl text-ink-900">
              Publidash
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-400">
            <a href="#" className="hover:text-ink-900 transition-colors">
              Sobre
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors text-ink-400">
              API (em breve)
            </a>
            <a
              href="/creator"
              className="text-violet-500 hover:text-violet-600 transition-colors font-medium"
            >
              É creator? Clique aqui
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-ink-400 hover:text-ink-900 transition-colors"
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
              className="text-ink-400 hover:text-ink-900 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-ink-50 text-center">
          <p className="text-xs text-ink-400">
            Publidash Tecnologia Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
