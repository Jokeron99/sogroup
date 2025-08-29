type Card = { title: string; price: string; features: string[]; cta?: string; featured?: boolean };

export default function Prices() {
  const cards: Card[] = [
    { title: "Косметический", price: "от 6 000 ₽/м²", features: ["Штукатурка/покраска", "Замена покрытий", "Сроки от 14 дней"] },
    { title: "Капитальный", price: "от 9 000 ₽/м²", features: ["Перепланировка", "Чистовые материалы", "Сроки от 30 дней"], featured: true },
    { title: "Дизайнерский", price: "от 15 000 ₽/м²", features: ["Авторский надзор", "Премиум-материалы", "Сроки от 45 дней"] },
  ];

  return (
    <section id="prices" className="container pt-[--section-gap]">
      <h2 className="text-3xl font-bold mb-8">Цены на ремонт</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article
            key={i}
            className={`relative overflow-hidden rounded-2xl border bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,.06),0_2px_8px_rgba(0,0,0,.04)] ${
              c.featured ? "ring-1 ring-primary/30" : "border-input"
            }`}
          >
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
            <button className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-white bg-primary hover:opacity-90 transition shadow-soft">
              Заказать
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
