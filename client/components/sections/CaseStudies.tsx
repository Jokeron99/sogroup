import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    cover: "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    t: "Penthouse Tverskaya",
    s: "Москва · 210 м²",
    desc: "Чистая геометрия, камень тёплых оттенков и латунные акценты. Максимум света и приватности.",
    photos: [
      "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/7046173/pexels-photo-7046173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/6899356/pexels-photo-6899356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    ],
  },
  {
    cover: "https://images.pexels.com/photos/7046173/pexels-photo-7046173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    t: "Townhouse Family",
    s: "Загородный дом · 320 м²",
    desc: "Функциональность для семьи: тёплое дерево, мягкие текстуры и умный свет.",
    photos: [
      "https://images.pexels.com/photos/7046173/pexels-photo-7046173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/6587893/pexels-photo-6587893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    ],
  },
  {
    cover: "https://images.pexels.com/photos/6899356/pexels-photo-6899356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    t: "Office Minimal",
    s: "Бизнес-центр · 540 м²",
    desc: "Статусный минимализм: строгие линии, много воздуха и деликатные акценты.",
    photos: [
      "https://images.pexels.com/photos/6899356/pexels-photo-6899356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
      "https://images.pexels.com/photos/8534043/pexels-photo-8534043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    ],
  },
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
          <Dialog key={i}>
            <DialogTrigger asChild>
              <button className="group w-full text-left overflow-hidden rounded-2xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/40">
                <img src={p.cover} alt={p.t} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="p-4 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-medium">{p.t}</div>
                    <div className="text-muted-foreground">{p.s}</div>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border group-hover:border-foreground/50 transition">→</span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{p.t}</DialogTitle>
                <DialogDescription>{p.s}</DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 relative">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {p.photos.map((src, idx) => (
                      <CarouselItem key={idx}>
                        <img src={src} alt={`${p.t} ${idx + 1}`} className="aspect-[16/9] w-full object-cover rounded-lg"/>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-background/60 backdrop-blur border-border hover:bg-background" />
                  <CarouselNext className="bg-background/60 backdrop-blur border-border hover:bg-background" />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
