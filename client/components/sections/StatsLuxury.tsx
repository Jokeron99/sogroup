const stats = [
  { n: "12+", t: "лет опыта" },
  { n: "150+", t: "проектов" },
  { n: "98%", t: "рекомендаций" },
  { n: "5 лет", t: "гарантия" },
];

export default function StatsLuxury() {
  return (
    <section className="container py-[--section-gap]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 text-center">
            <div className="text-4xl font-display tracking-tight text-primary">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.t}</div>
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"/>
          </div>
        ))}
      </div>
    </section>
  );
}
