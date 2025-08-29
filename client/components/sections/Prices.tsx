type Card = { title: string; price: string; features: string[]; cta?: string; featured?: boolean };

export default function Prices() {
  const cards: Card[] = [
    { title: "Косметический", price: "от 6 000 ₽/м²", features: ["Штукатурка/покраска", "Замена покрытий", "Сроки от 14 дней"] },
    { title: "Капитальный", price: "от 9 000 ₽/м²", features: ["Перепланировка", "Чистовые материалы", "Сроки от 30 дней"], featured: true },
    { title: "Дизайнерский", price: "от 15 000 ₽/м²", features: ["Авторский надзор", "Премиум-материалы", "Сроки от 45 дней"] },
  ];

  return (
    <section id="prices" className="container pt-[--section-gap]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-tight">Цены на ремонт квартиры в 2021 году</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article
            key={i}
            className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,.08)] ${
              c.featured ? "ring-1 ring-primary/30" : "border-input"
            }`}
          >
            {c.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ff5c5c] text-white text-xs px-3 py-1 shadow">Хит</div>
            )}
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-2xl font-extrabold text-primary">{c.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-white bg-gradient-to-b from-sky-400 to-blue-600 hover:brightness-105 transition shadow-[0_8px_18px_rgba(29,78,216,.25)]">
              Заказать
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
