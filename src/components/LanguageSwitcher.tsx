import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langs = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "kk", label: "Қазақша", short: "KK" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "ZH" },
] as const;

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "ru").slice(0, 2);
  const active = langs.find((l) => l.code === current) ?? langs[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="brutal-border bg-background hover-lift inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider focus:outline-none">
        <Globe className="h-4 w-4" />
        {active.short}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="brutal-border rounded-none p-0 min-w-[160px]">
        {langs.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={`rounded-none cursor-pointer font-semibold ${
              l.code === active.code ? "bg-foreground text-background focus:bg-foreground focus:text-background" : ""
            }`}
          >
            <span className="mr-2 text-xs opacity-60">{l.short}</span>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
