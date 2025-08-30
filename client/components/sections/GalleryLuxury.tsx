const imgs = [
  {
    src: "https://images.pexels.com/photos/7544606/pexels-photo-7544606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Гостиная с мрамором",
  },
  {
    src: "https://images.pexels.com/photos/17026320/pexels-photo-17026320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Латунные детали в интерьере",
  },
  {
    src: "https://images.pexels.com/photos/6587893/pexels-photo-6587893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Современная кухня премиум",
  },
  {
    src: "https://images.pexels.com/photos/532563/pexels-photo-532563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Тёплая спальня в дереве",
  },
  {
    src: "https://images.pexels.com/photos/6587892/pexels-photo-6587892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Минималистичный холл",
  },
  {
    src: "https://images.pexels.com/photos/8534043/pexels-photo-8534043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
    a: "Офис с премиальной отделкой",
  },
];

export default function GalleryLuxury() {
  return (
    <section className="container py-[--section-gap]">
      <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
        Вдохновение
      </h2>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {imgs.map((i, idx) => (
          <figure
            key={idx}
            className={`group overflow-hidden rounded-2xl border border-border bg-card ${idx % 5 === 0 ? "md:col-span-2" : ""}`}
          >
            <img
              src={i.src}
              alt={i.a}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
