const items = [
  { t: "Квартиры", s: "Авторские интерьеры под ключ" },
  { t: "Дома", s: "Благородные материалы и свет" },
  { t: "Офисы", s: "Репутация и статус в деталях" },
];

export default function Services() {
  return (
    <section id="services" className="container py-[--section-gap]">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Направления</h2>
        <p className="hidden sm:block text-sm text-muted-foreground max-w-sm">Создаём пространства с характером брендов уровня haute couture.</p>
      </div>
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {items.map((i) => (
          <article key={i.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="absolute inset-0 pointer-events-none" style={{background:"linear-gradient(180deg,transparent,hsla(0,0%,100%,0.02))"}}/>
            <div className="text-xl font-medium">{i.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{i.s}</div>
            <div className="mt-6 h-40 rounded-xl border border-border/60 bg-gradient-to-b from-foreground/5 to-transparent"/>
            <a href="#consult" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition">
              Подробнее
              <span className="inline-block h-px w-8 bg-muted-foreground group-hover:bg-foreground transition"/>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
