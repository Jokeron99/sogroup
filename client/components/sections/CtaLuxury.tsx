export default function CtaLuxury() {
  return (
    <section id="consult" className="container py-[--section-gap]">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(800px_200px_at_20%_-10%,hsl(var(--primary)),transparent_60%)]" />
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12">
            <h3 className="font-display text-3xl sm:text-4xl tracking-tight">
              Давайте обсудим ваш проект
            </h3>
            <p className="mt-4 text-muted-foreground">
              Оставьте контакты — свяжемся в течение рабочего дня и подготовим
              ориентировочную смету.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Персональный куратор проекта
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Фиксированные сроки
              </li>
            </ul>
          </div>
          <form className="p-8 md:p-12 bg-card border-l border-border grid gap-4">
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Ваше имя</span>
              <input
                className="w-full rounded-md border border-input bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Иван"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Телефон</span>
              <input
                className="w-full rounded-md border border-input bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">E-mail</span>
              <input
                className="w-full rounded-md border border-input bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="name@example.com"
              />
            </label>
            <button className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-background bg-primary hover:brightness-110 transition shadow-[0_8px_24px_hsl(var(--primary)/0.25)]">
              Отправить заявку
            </button>
            <p className="text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с условиями обработки персональных
              данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
