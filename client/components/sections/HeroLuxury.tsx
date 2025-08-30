export default function HeroLuxury() {
  return (
    <section className="relative overflow-hidden">
      <img src="https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920" alt="Интерьер класса люкс" className="absolute inset-0 w-full h-full object-cover opacity-[0.22]"/>
      <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,hsl(var(--primary)/0.12),transparent_60%)]" />
      <div className="absolute inset-0" aria-hidden>
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>
      </div>
      <div className="container relative py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.35em] uppercase text-muted-foreground/80">SO GROUP — premium interiors</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            Дизайнерский ремонт класса люкс
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Квартиры, дома и офисы в эстетике премиальных брендов. Тонкие пропорции, благородные материалы, безупречная реализация.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#consult" className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-background bg-primary overflow-hidden transition shadow-[0_8px_24px_hsl(var(--primary)/0.25)] hover:brightness-110">
              <span className="relative">Записаться на консультацию</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" style={{background:"linear-gradient(120deg, transparent 0%, hsla(0,0%,100%,0.25) 20%, transparent 40%)"}}/>
            </a>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium border border-border hover:border-foreground/50 transition">Портфолио</a>
          </div>
        </div>
      </div>
    </section>
  );
}
