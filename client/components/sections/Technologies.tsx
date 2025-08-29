export default function Technologies() {
  return (
    <section id="tech" className="container pt-[--section-gap]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 uppercase">Технологии и производство</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { t: "Собственное СКЛАД", s: "Логистика и хранение" },
          { t: "Контроль качества", s: "Технадзор на всех этапах" },
          { t: "Сертифицированные материалы", s: "Документы по запросу" },
        ].map((i, idx) => (
          <div key={idx} className="rounded-2xl border border-input bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,.06)]">
            <div className="text-lg font-semibold">{i.t}</div>
            <div className="text-sm text-muted-foreground mt-2">{i.s}</div>
            <div className="mt-4 h-24 rounded-xl bg-gradient-to-b from-sky-50 to-white border border-input"/>
          </div>
        ))}
      </div>
    </section>
  );
}
