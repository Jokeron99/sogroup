const mats = [
  {
    t: "Мрамор",
    s: "Натуральный камень с выразительной фактурой",
    img: "https://images.pexels.com/photos/1261806/pexels-photo-1261806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
  },
  {
    t: "Массив",
    s: "Тёплое фактурное дерево премиум-пород",
    img: "https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
  },
  {
    t: "Латунь",
    s: "Благородный металл для акцентов и фурнитуры",
    img: "https://images.pexels.com/photos/1457849/pexels-photo-1457849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
  },
];

export default function Materials() {
  return (
    <section className="container py-[--section-gap]">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
        Материалы
      </h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {mats.map((m) => (
          <article
            key={m.t}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={m.img}
              alt=""
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="text-lg font-medium">{m.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.s}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
