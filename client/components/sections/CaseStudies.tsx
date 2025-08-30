const projects = [
  { img: "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600", t: "Penthouse Tverskaya", s: "Москва · 210 м²" },
  { img: "https://images.pexels.com/photos/7046173/pexels-photo-7046173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600", t: "Townhouse Family", s: "Загородный дом · 320 м²" },
  { img: "https://images.pexels.com/photos/6899356/pexels-photo-6899356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600", t: "Office Minimal", s: "Бизнес-центр · 540 м²" },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="container py-[--section-gap]">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight">Проекты</h2>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">Все проекты</a>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <figure key={i} className="group overflow-hidden rounded-2xl border border-border bg-card">
            <img src={p.img} alt="" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <figcaption className="p-4 flex items-center justify-between text-sm">
              <div>
                <div className="font-medium">{p.t}</div>
                <div className="text-muted-foreground">{p.s}</div>
              </div>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border group-hover:border-foreground/50 transition">→</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
