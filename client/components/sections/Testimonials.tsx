import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const quotes = [
  {
    r: "Клиент",
    q: "Абсолютное спокойствие и точность. Доверяешь им ключи и получаешь результат уровня бутиков.",
  },
  {
    r: "Клиент",
    q: "Смета не разъехалась, сроки выдержаны. Материалы и стыки — как на референсах премиум-брендов.",
  },
  {
    r: "Партнёр",
    q: "SO Group — редкий кейс безупречной реализации: сроки, сметы и качество совпадают.",
  },
  {
    r: "Клиент",
    q: "Деликатный сервис: тишина, порядок и уважение к пространству. Это роскошь.",
  },
  {
    r: "Архитектор",
    q: "Команда слышит и дорабатывает детали. Работать с ними — эстетическое уд��вольствие.",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section id="testimonials" className="container py-[--section-gap]">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
          Отзывы
        </h2>
        <div className="text-sm text-muted-foreground">
          {quotes.length} отзывов
        </div>
      </div>
      <div className="mt-8 relative">
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {quotes.map((c, i) => (
              <CarouselItem key={i}>
                <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
                  <div className="absolute -top-10 -left-6 text-[140px] leading-none text-foreground/5">
                    “
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {c.r}
                  </div>
                  <p className="mt-3 text-lg leading-7">{c.q}</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/60 backdrop-blur border-border hover:bg-background" />
          <CarouselNext className="bg-background/60 backdrop-blur border-border hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
}
