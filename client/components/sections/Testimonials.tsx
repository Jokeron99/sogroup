const quotes = [
  { r: "Клиент", q: "Абсолютное спокойствие и точность. Доверяешь им ключи и получаешь результат уровня бутиков." },
  { r: "Партнёр", q: "SO Group — редкий кейс безупречной реализации: сроки, сметы и качество совпадают." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-[--section-gap]">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Отзывы</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {quotes.map((c, i) => (
          <article key={i} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
            <div className="absolute -top-10 -left-6 text-[140px] leading-none text-foreground/5">“</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{c.r}</div>
            <p className="mt-3 text-lg leading-7">{c.q}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
