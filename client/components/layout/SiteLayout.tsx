import { Link, Outlet } from "react-router-dom";
import { Instagram, Phone, Send } from "lucide-react";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="group inline-flex items-baseline gap-2">
            <span className="text-xl font-display tracking-tight">SO Group</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.35em] text-muted-foreground group-hover:text-foreground transition-colors">interiors</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#calc" className="text-muted-foreground hover:text-foreground transition-colors">Калькулятор</a>
            <a href="#works" className="text-muted-foreground hover:text-foreground transition-colors">Работы</a>
            <a href="#prices" className="text-muted-foreground hover:text-foreground transition-colors">Цены</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <a href="#consult" className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-background bg-primary hover:brightness-110 transition shadow-[0_8px_24px_hsl(var(--primary)/0.25)]">
            <span>Оставить заявку</span>
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer id="contacts" className="border-t border-border/70 mt-24">
        <div className="container py-16 grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-2xl font-semibold">SO Group</div>
            <p className="text-sm text-muted-foreground max-w-xs">Нас рекомендуют тем, кто ценит качество и вкус. Дизайнерский ремонт квартир и домов под ключ.</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Контакты</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-foreground/70"/><a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a></li>
              <li><a href="mailto:hello@sogroup.ru" className="hover:underline">hello@sogroup.ru</a></li>
              <li>Москва, Большая Никитская, 15</li>
            </ul>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Соцсети</div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border hover:border-foreground/40 transition-colors"><Instagram className="h-4 w-4"/></a>
              <a href="#" aria-label="Telegram" className="p-2 rounded-full border border-border hover:border-foreground/40 transition-colors"><Send className="h-4 w-4"/></a>
            </div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Сертификаты и партнёры</div>
            <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
              <div className="rounded-md border border-border px-3 py-2">Vitra</div>
              <div className="rounded-md border border-border px-3 py-2">Poliform</div>
              <div className="rounded-md border border-border px-3 py-2">B&B Italia</div>
              <div className="rounded-md border border-border px-3 py-2">Gaggenau</div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70 py-6 text-xs text-muted-foreground">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} SO Group. Все права защ��щены.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">Политика конфиденциальности</a>
              <a href="#" className="hover:underline">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
