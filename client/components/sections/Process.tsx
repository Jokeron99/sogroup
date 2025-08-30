const steps = [
  { n: "01", t: "Консультация", s: "Встреча, бриф и понимание задач", img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600" },
  { n: "02", t: "Концепция", s: "Планировки, референсы, бюджеты", img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600" },
  { n: "03", t: "Проект", s: "Чертежи, сметы, календарный план", img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600" },
  { n: "04", t: "Реализация", s: "Отделка, комплектация, надзор", img: "https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600" },
];

export default function Process() {
  return (
    <section className="container py-[--section-gap]">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Как мы работаем</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm text-muted-foreground">{s.n}</div>
            <div className="mt-2 text-lg font-medium">{s.t}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.s}</div>
            <div className="mt-6 h-px bg-border"/>
            <div className="relative mt-6 overflow-hidden rounded-xl border border-border/60">
              <img src={s.img} alt={s.t} className="h-36 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy"/>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/5 to-transparent"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
