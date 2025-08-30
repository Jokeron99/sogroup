const steps = [
  { n: "01", t: "Консультация", s: "Встреча, бриф и понимание задач" },
  { n: "02", t: "Концепция", s: "Планировки, референсы, бюджеты" },
  { n: "03", t: "Проект", s: "Чертежи, сметы, календарный план" },
  { n: "04", t: "Реализация", s: "Отделка, комплектация, надзор" },
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
            <div className="mt-6 h-24 rounded-xl border border-border/60"/>
          </div>
        ))}
      </div>
    </section>
  );
}
