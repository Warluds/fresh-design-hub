import { ArrowUpRight, Instagram, Megaphone, Palette, Video, Headphones, Code2, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const services = [
  { icon: Instagram, title: "Маркетинг в Instagram", desc: "Контент-стратегия, продвижение, рост аудитории и продаж.", tone: "accent" as const, big: true },
  { icon: Megaphone, title: "Таргет и реклама", desc: "Performance-кампании, которые приводят клиентов.", tone: "ink" as const },
  { icon: Palette, title: "Айдентика", desc: "Логотип, фирменный стиль, гайдлайны.", tone: "pop" as const },
  { icon: Video, title: "Видеосъёмка и монтаж", desc: "Reels, рекламные ролики, продуктовые съёмки.", tone: "ink" as const, big: true },
  { icon: Code2, title: "Сайты и веб-дизайн", desc: "Лендинги и корпоративные сайты под ключ.", tone: "accent" as const },
  { icon: Headphones, title: "Персональный менеджер", desc: "На связи 24/7. Один контакт — всё под контролем.", tone: "pop" as const },
];

const stats = [
  { v: "8+", l: "лет на рынке" },
  { v: "120+", l: "проектов" },
  { v: "40М", l: "охват в соцсетях" },
  { v: "24/7", l: "поддержка" },
];

const cases = [
  { tag: "Beauty", title: "Студия маникюра", metric: "+312% подписчиков" },
  { tag: "Retail", title: "Центр красок", metric: "22.4К аудитория" },
  { tag: "HoReCa", title: "Сеть кофеен", metric: "×4 заявок в DM" },
  { tag: "Авто", title: "Дилерский центр", metric: "ROAS 7.8" },
];

const Index = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "Asia/Almaty", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      setTime(new Intl.DateTimeFormat("ru-RU", opts).format(d));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toneCls = (t: "accent" | "ink" | "pop") =>
    t === "accent"
      ? "bg-accent text-accent-foreground"
      : t === "pop"
      ? "bg-pop text-pop-foreground"
      : "bg-foreground text-background";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center bg-foreground text-background">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">impulse<span className="text-accent">.</span>media</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Услуги", "#services"],
              ["Кейсы", "#cases"],
              ["Подход", "#approach"],
              ["Контакты", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <Button asChild variant="default" className="brutal-border brutal-shadow rounded-none bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground hover-lift font-semibold">
            <a href="#contact">Заявка <ArrowUpRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-foreground grid-bg">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 brutal-border bg-pop px-3 py-1 text-xs font-bold uppercase tracking-wider text-pop-foreground">
                <span className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                Алматы · {time}
              </div>
              <h1 className="font-display font-extrabold tracking-tighter leading-[0.85] text-[13vw] sm:text-[12vw] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem]">
                ОТ ИДЕИ
                <br />
                ДО <span className="inline-block bg-accent px-3 text-accent-foreground">РЕЗУЛЬТАТА</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
                Маркетинговое агентство полного цикла. Растим бренды через контент, рекламу и продакшн, который замечают.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="brutal-border brutal-shadow rounded-none bg-foreground text-background hover:bg-foreground hover:text-background hover-lift font-semibold h-14 px-8 text-base">
                  <a href="#contact">Обсудить проект <ArrowUpRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="brutal-border rounded-none bg-background hover-lift font-semibold h-14 px-8 text-base">
                  <a href="#cases">Смотреть кейсы</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="brutal-border brutal-shadow-accent bg-background p-6 hover-lift">
                <div className="font-display text-5xl font-bold">8+</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">лет опыта в маркетинге</div>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t-2 border-foreground pt-6">
                  {stats.slice(1).map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-2xl font-bold">{s.v}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between brutal-border bg-pop p-4 hover-lift">
                <span className="text-sm font-bold uppercase tracking-wider">Свободные слоты</span>
                <span className="font-display text-3xl font-bold">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-t-2 border-foreground bg-foreground py-4 text-background overflow-hidden">
          <div className="marquee flex whitespace-nowrap font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center">
                {["Instagram-маркетинг", "Реклама", "Айдентика", "Видеопродакшн", "Сайты", "Контент-стратегия"].map((w) => (
                  <span key={w} className="mx-8 flex items-center gap-8">
                    {w}
                    <span className="text-accent">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — BENTO */}
      <section id="services" className="border-b-2 border-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">/ 01 — услуги</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                Что мы<br />умеем делать
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Шесть направлений — один результат. Собираем команду под задачу и доводим до цифр в отчёте.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`group relative ${s.big ? "md:col-span-2" : ""} ${toneCls(s.tone)} brutal-border p-7 hover-lift overflow-hidden`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <s.icon className="h-10 w-10" strokeWidth={2} />
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-md opacity-80">{s.desc}</p>
                  </div>
                </div>
                <ArrowUpRight className="absolute right-5 top-5 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="border-b-2 border-foreground bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">/ 02 — подход</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                Без воды.<br />
                Только<br />
                <span className="bg-foreground px-3 text-background">результат.</span>
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground">
                Мы потратили годы, чтобы понять ЧТО ИМЕННО РАБОТАЕТ. Теперь предлагаем партнёрам только проверенные инструменты.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              {[
                ["01", "Бриф и аудит", "Погружаемся в нишу, конкурентов, метрики. Формируем гипотезы."],
                ["02", "Стратегия", "Контент-план, медиа-план, KPI. Прозрачно и в цифрах."],
                ["03", "Продакшн", "Снимаем, монтируем, дизайним, кодим. Внутренняя команда."],
                ["04", "Запуск и рост", "Тесты, оптимизация, отчёты. Менеджер на связи 24/7."],
              ].map(([n, t, d]) => (
                <div key={n} className="grid grid-cols-[auto_1fr] gap-6 brutal-border bg-background p-6 hover-lift">
                  <div className="font-display text-4xl font-extrabold text-accent md:text-5xl">{n}</div>
                  <div>
                    <h3 className="font-display text-xl font-bold md:text-2xl">{t}</h3>
                    <p className="mt-1 text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="border-b-2 border-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">/ 03 — кейсы</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                Цифры,<br />не обещания
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cases.map((c, i) => (
              <a
                key={c.title}
                href="#contact"
                className={`group brutal-border p-6 hover-lift flex flex-col justify-between min-h-[260px] ${
                  i % 3 === 0 ? "bg-accent text-accent-foreground" : i % 3 === 1 ? "bg-pop text-pop-foreground" : "bg-foreground text-background"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80">{c.tag}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold leading-tight">{c.metric}</div>
                  <div className="mt-2 text-sm opacity-90">{c.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b-2 border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">/ 04 — контакты</div>
              <h2 className="font-display text-6xl font-extrabold leading-[0.9] md:text-[9rem] md:leading-[0.85]">
                Давай<br />
                <span className="text-accent">обсудим.</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg text-background/70">
                Напишите нам, что нужно — за 24 часа вернёмся с гипотезой и сметой.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-5">
              {[
                { Icon: Mail, label: "Почта", value: "hello@impulse-media.kz", href: "mailto:hello@impulse-media.kz" },
                { Icon: Phone, label: "Телефон", value: "+7 (700) 000 00 00", href: "tel:+77000000000" },
                { Icon: Instagram, label: "Instagram", value: "@impulse.media", href: "https://instagram.com" },
                { Icon: MapPin, label: "Офис", value: "Алматы, Казахстан", href: "#" },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between brutal-border border-background bg-background text-foreground p-5 hover-lift"
                  style={{ boxShadow: "6px 6px 0 0 hsl(var(--accent))" }}
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center bg-foreground text-background">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
                      <div className="font-display text-lg font-bold">{value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-8 md:px-8">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center bg-foreground text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-bold">impulse<span className="text-accent">.</span>media</span>
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} Impulse Media · Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
