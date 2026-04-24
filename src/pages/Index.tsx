import { ArrowUpRight, Instagram, Megaphone, Palette, Video, Headphones, Code2, Mail, Phone, MapPin, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = { timeZone: "Asia/Almaty", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      const locale = i18n.language === "kk" ? "kk-KZ" : i18n.language === "zh" ? "zh-CN" : i18n.language === "en" ? "en-US" : "ru-RU";
      setTime(new Intl.DateTimeFormat(locale, opts).format(d));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [i18n.language]);

  const services = [
    { icon: Instagram, key: "ig", tone: "accent" as const, big: true },
    { icon: Megaphone, key: "ads", tone: "ink" as const },
    { icon: Palette, key: "brand", tone: "pop" as const },
    { icon: Video, key: "video", tone: "ink" as const, big: true },
    { icon: Code2, key: "web", tone: "accent" as const },
    { icon: Headphones, key: "manager", tone: "pop" as const },
    { icon: Youtube, key: "youtube", tone: "ink" as const, big: true },
  ];

  const stats = [
    { v: "8+", l: t("stats.years") },
    { v: "120+", l: t("stats.projects") },
    { v: "40М", l: t("stats.reach") },
    { v: "24/7", l: t("stats.support") },
  ];

  const approachSteps = t("approach.steps", { returnObjects: true }) as { t: string; d: string }[];
  const caseItems = t("cases.items", { returnObjects: true }) as { tag: string; title: string; metric: string }[];

  const toneCls = (tone: "accent" | "ink" | "pop") =>
    tone === "accent"
      ? "bg-accent text-accent-foreground"
      : tone === "pop"
      ? "bg-pop text-pop-foreground"
      : "bg-foreground text-background";

  const marqueeWords = [
    t("services.items.ig.t"),
    t("services.items.ads.t"),
    t("services.items.brand.t"),
    t("services.items.video.t"),
    t("services.items.web.t"),
    t("services.items.manager.t"),
    t("services.items.youtube.t"),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8 gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Impulse Media" className="h-10 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              [t("nav.services"), "#services"],
              [t("nav.cases"), "#cases"],
              [t("nav.approach"), "#approach"],
              [t("nav.contact"), "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium hover:text-accent transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild className="brutal-border brutal-shadow rounded-none bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground hover-lift font-semibold">
              <a href="#contact">{t("nav.cta")} <ArrowUpRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b-2 border-foreground grid-bg">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 brutal-border bg-pop px-3 py-1 text-xs font-bold uppercase tracking-wider text-pop-foreground">
                <span className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                {t("hero.badge")} · {time}
              </div>
              <h1 className="font-display font-extrabold tracking-tighter leading-[0.85] text-[13vw] sm:text-[12vw] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem]">
                {t("hero.title1")}
                <br />
                {t("hero.title2")} <span className="inline-block bg-accent px-3 text-accent-foreground">{t("hero.title3")}</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">{t("hero.desc")}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="brutal-border brutal-shadow rounded-none bg-foreground text-background hover:bg-foreground hover:text-background hover-lift font-semibold h-14 px-8 text-base">
                  <a href="#contact">{t("hero.primary")} <ArrowUpRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="brutal-border rounded-none bg-background hover-lift font-semibold h-14 px-8 text-base">
                  <a href="#cases">{t("hero.secondary")}</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 relative z-10">
              <div className="brutal-border brutal-shadow-accent bg-background p-6 hover-lift">
                <div className="font-display text-5xl font-bold">8+</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">{t("hero.expYears")}</div>
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
                <span className="text-sm font-bold uppercase tracking-wider">{t("hero.slots")}</span>
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
                {marqueeWords.map((w, idx) => (
                  <span key={`${i}-${idx}`} className="mx-8 flex items-center gap-8">
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
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{t("services.eyebrow")}</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                {t("services.title1")}<br />{t("services.title2")}
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">{t("services.desc")}</p>
          </div>

          <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.key}
                className={`group relative ${s.big ? "md:col-span-2" : ""} ${toneCls(s.tone)} brutal-border p-7 hover-lift overflow-hidden`}
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <s.icon className="h-10 w-10" strokeWidth={2} />
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">{t(`services.items.${s.key}.t`)}</h3>
                    <p className="mt-3 max-w-md opacity-80">{t(`services.items.${s.key}.d`)}</p>
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
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{t("approach.eyebrow")}</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                {t("approach.title1")}<br />
                {t("approach.title2")}<br />
                <span className="bg-foreground px-3 text-background">{t("approach.title3")}</span>
              </h2>
              <p className="mt-8 max-w-md text-muted-foreground">{t("approach.desc")}</p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="grid grid-cols-[auto_1fr] gap-6 brutal-border bg-background p-6 hover-lift">
                  <div className="font-display text-4xl font-extrabold text-accent md:text-5xl">{String(idx + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="font-display text-xl font-bold md:text-2xl">{step.t}</h3>
                    <p className="mt-1 text-muted-foreground">{step.d}</p>
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
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{t("cases.eyebrow")}</div>
              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                {t("cases.title1")}<br />{t("cases.title2")}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {caseItems.map((c, i) => (
              <a
                key={i}
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
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{t("contact.eyebrow")}</div>
              <h2 className="font-display text-6xl font-extrabold leading-[0.9] md:text-[9rem] md:leading-[0.85]">
                {t("contact.title1")}<br />
                <span className="text-accent">{t("contact.title2")}</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg text-background/70">{t("contact.desc")}</p>
            </div>
            <div className="lg:col-span-5 space-y-5">
              {[
                { Icon: Mail, label: t("contact.email"), value: "hello@impulse-media.kz", href: "mailto:hello@impulse-media.kz" },
                { Icon: Phone, label: t("contact.phone"), value: "+7 701 880 7020", href: "tel:+77018807020" },
                { Icon: Instagram, label: t("contact.instagram"), value: "@impulse.media", href: "https://instagram.com" },
                { Icon: MapPin, label: t("contact.office"), value: t("contact.officeValue"), href: "#" },
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
            <img src={logo} alt="Impulse Media" className="h-8 w-auto" />
          </div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} Impulse Media · {t("footer.rights")}
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center brutal-border brutal-shadow bg-accent text-accent-foreground hover-lift transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Index;
