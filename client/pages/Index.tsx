import { useMemo } from "react";
import { CheckCircle2, Gem, ShieldCheck, User } from "lucide-react";
import Prices from "../components/sections/Prices";
import Technologies from "../components/sections/Technologies";

export default function Index() {
  const images = useMemo(
    () => [
      {
        src:
          "https://images.pexels.com/photos/7046173/pexels-photo-7046173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Современная гостиная с панорамными окнами",
      },
      {
        src:
          "https://images.pexels.com/photos/6587896/pexels-photo-6587896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Кухня в минималистичном стиле премиум",
      },
      {
        src:
          "https://images.pexels.com/photos/7546636/pexels-photo-7546636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Спальня с тёплой атмосферой и мягким светом",
      },
      {
        src:
          "https://images.pexels.com/photos/19141078/pexels-photo-19141078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Ванная комната с мрамором и латунью",
      },
      {
        src:
          "https://images.pexels.com/photos/12277295/pexels-photo-12277295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Уютная современная спальня в натурал��ных оттенках",
      },
      {
        src:
          "https://images.pexels.com/photos/6899356/pexels-photo-6899356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1600",
        alt: "Интерьер с арт-объектами и зеркалом",
      },
    ],
    [],
  );

  return (
    <div className="[--section-gap:5rem]">
      {/* HERO (Behance screenshot background) */}
      <section
        className="relative min-h-[80vh] flex items-end overflow-hidden"
      >
        {/* Decorative crops from the provided sprite to match reference, kept as real <img> */}
        <img src="https://cdn.builder.io/api/v1/image/assets%2F722e517b2f1348adbcd872b20bb5c2fe%2Ff0b7eae381cd46b29eb27d5154cb3b32?format=webp&width=1920" alt="" className="absolute inset-0 w-full h-full object-cover opacity-70"/>
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white to-transparent"/>
        <div className="container pb-16 relative">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              РЕМОНТ КВАРТИР В МОСКВЕ И МО
            </div>
            <div className="inline-block rounded-2xl bg-white/80 backdrop-blur px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,.07)]">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-foreground">
              РЕМОНТ КВАРТИР И ДОМОВ
              </h1>
            </div>
            <p className="mt-4 text-muted-foreground bg-white/80 inline-block px-4 py-2 rounded-full">
              Калькулято�� стоимости за 2 минуты. Получите сметы уже сегодня.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center rounded-full text-white bg-gradient-to-b from-sky-400 to-blue-600 px-6 py-3 hover:brightness-105 transition shadow-[0_8px_18px_rgba(29,78,216,.25)]"
              >
                Оставить заявку
              </a>
              <a
                href="#calc"
                className="inline-flex items-center rounded-full px-6 py-3 border border-input bg-white hover:border-foreground/40 transition"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERO tiles row */}
      <div className="container -mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { t: "Соблюдаем сроки", s: "Фиксируем в договоре" },
            { t: "Высокое качество", s: "Опытные бригады" },
            { t: "Гарантия", s: "до 5 лет" },
            { t: "Сметы сегодня", s: "3 варианта" },
          ].map((i, idx) => (
            <div key={idx} className="rounded-xl border border-input bg-white/90 backdrop-blur p-4 shadow-soft">
              <div className="text-sm font-semibold">{i.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{i.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CALCULATOR (ref mimic) */}
      <section id="calc" className="container pt-[--section-gap]">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-xl border border-input bg-white p-6 shadow-soft">
            <h3 className="text-2xl font-bold">Рассчитать стоимость ремонта</h3>
            <p className="text-sm text-muted-foreground mt-2">Заполните 3 поля — займет до 2 минут</p>
            <form className="mt-6 grid sm:grid-cols-2 gap-4">
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Тип помещения</span>
                <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                  <option>Квартира</option>
                  <option>Дом</option>
                  <option>Офис</option>
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Площадь, м²</span>
                <input type="number" min={10} placeholder="60" className="w-full rounded-md border border-input bg-transparent px-3 py-2" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block text-muted-foreground">Уровень отделки</span>
                <select className="w-full rounded-md border border-input bg-transparent px-3 py-2">
                  <option>Косметический</option>
                  <option>Капитальный</option>
                  <option>Дизайнерский</option>
                </select>
              </label>
              <button type="button" className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium shadow-soft hover:opacity-90 transition">Рассчитать</button>
            </form>
          </div>
          <div className="rounded-xl border border-input bg-secondary p-6">
            <h4 className="font-semibold">Получите сметы уже сегодня</h4>
            <p className="text-sm text-muted-foreground mt-2">Оставьте контакты — вышлем 3 варианта сметы на почту</p>
            <form className="mt-4 grid gap-3">
              <input className="rounded-md border border-input bg-white px-3 py-2" placeholder="Ваше имя"/>
              <input className="rounded-md border border-input bg-white px-3 py-2" placeholder="Телефон"/>
              <input className="rounded-md border border-input bg-white px-3 py-2" placeholder="E-mail"/>
              <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium shadow-soft hover:opacity-90 transition">Получить сметы</button>
            </form>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="works" className="container pt-[--section-gap]">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl sm:text-4xl">Наши проекты</h2>
          <p className="hidden sm:block text-sm text-muted-foreground max-w-sm">
            Тонкие пропорции, продуманная геометрия и благородная палитра
            материалов. Каждая деталь имеет значение.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-xl bg-card shadow-soft border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 flex items-center justify-between text-sm">
                <span className="text-foreground/80">Проект №{i + 1}</span>
                <span className="text-muted-foreground">Квартира · 120 м²</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="container pt-[--section-gap]">
        <div className="grid md:grid-cols-4 gap-6">
          <Benefit
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Работаем под ключ"
            text="От идеи и проектирования до строительно-отделочных работ и комплектации."
          />
          <Benefit
            icon={<Gem className="h-6 w-6" />}
            title="Премиум-материалы"
            text="Используем благородные покрытия, камень, массив, латунь и авторский свет."
          />
          <Benefit
            icon={<User className="h-6 w-6" />}
            title="Личный дизайнер"
            text="Один куратор ведёт проект, встречается, подбирает и контролирует качество."
          />
          <Benefit
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Гарантия до 5 лет"
            text="Фиксируем сроки и даём расширенную гарантию на отдел��чные работы."
          />
        </div>
      </section>

      <Technologies />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container pt-[--section-gap]">
        <h2 className="font-display text-3xl sm:text-4xl mb-8">Отзывы</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <DialogCard
            role="Клиент"
            text="Мы хотим интерьер без лишнего — тёплый, но минималистичный."
          />
          <DialogCard
            role="Дизайнер"
            accent
            text="Мы предложим три варианта планировки и подбор материалов: тёплый камень, текстурное дерево, мягкая бронза."
          />
          <DialogCard
            role="Клиент"
            text="Спасибо за деликатный подход — всё чётко и без суеты. Соседи уже спрашивают контакты."
          />
          <DialogCard
            role="Дизайнер"
            accent
            text="Рады, что получилось передать ваш характер. Всегда на связи, если зах��тите обновить детали."
          />
        </div>
      </section>

      {/* PRICES */}
      {/* Rebuilt as a dedicated component for pixel precision */}
      {/**/}
      <Prices />

      {/* CTA */}
      <section id="cta" className="container pt-[--section-gap]">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/40">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(800px 300px at 10% 0%, hsl(var(--sand)) 0%, transparent 50%)" }} />
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl">
                Оставьте заявку — и мы разработаем интерьер бесплатно
              </h3>
              <p className="mt-4 text-muted-foreground max-w-prose">
                Бриф, планировочные решения и концепция в подарок. Начните с короткой заявки — мы свяжемся в течение одного рабочего дня.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"/>Без спама и лишних звонков</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block"/>Закрепим условия и сроки</li>
              </ul>
            </div>
            <form className="bg-card p-6 rounded-xl shadow-soft border border-border grid grid-cols-1 gap-4">
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Ваше имя</span>
                <input
                  type="text"
                  required
                  placeholder="Иван"
                  className="w-full rounded-md border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">Телефон</span>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-md border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="text-sm">
                <span className="mb-1 block text-muted-foreground">E-mail</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-md border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium shadow-soft hover:opacity-90 transition">
                Отправить заявку
              </button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SPACER to footer */}
      <div className="h-[--section-gap]"></div>
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <div className="font-medium">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function DialogCard({ role, text, accent }: { role: string; text: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-soft ${accent ? "bg-secondary/50 border-border" : "bg-card border-border"}`}>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{role}</div>
      <p className="mt-2 text-lg leading-7">{text}</p>
    </div>
  );
}
