"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/language-context";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#home", width: "w-[64px]" },
    { name: t.nav.about, href: "#about", width: "w-[88px]" },
    { name: t.nav.skills, href: "#skills", width: "w-[104px]" },
    { name: t.nav.projects, href: "#projects", width: "w-[88px]" },
    { name: t.nav.contact, href: "#contact", width: "w-[82px]" },
  ];

  // Check if we're on a project page
  const isProjectPage = pathname?.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only update active section if we're not on a project page
      if (!isProjectPage) {
        const sections = ["home", "about", "skills", "projects", "contact"];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  // Scroll to anchor section on initial load if hash is present in URL
  useEffect(() => {
    if (!isProjectPage && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isProjectPage]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // If we're on a project page, navigate to home with section hash
    if (isProjectPage) {
      window.location.href = '/' + href;
      return;
    }

    // Normal navigation for home page
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  const toggleLocale = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={() => handleNavClick("#home")}
          >
            Kimetz Loroño
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={`relative ${item.width} flex items-center justify-center text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  !isProjectPage && activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <span className="relative inline-block py-1">
                  {item.name}
                  {!isProjectPage && activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </motion.button>
            ))}

            {/* Language Toggle EN / ES */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="relative inline-flex items-center rounded-full border border-border/60 bg-muted/40 p-1 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setLocale("es")}
                  className={`relative z-10 w-9 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors duration-200 ${
                    locale === "es"
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Español"
                  aria-label="Cambiar a Español"
                >
                  {locale === "es" && (
                    <motion.div
                      layoutId="active-locale-desktop"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">ES</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`relative z-10 w-9 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors duration-200 ${
                    locale === "en"
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="English"
                  aria-label="Switch to English"
                >
                  {locale === "en" && (
                    <motion.div
                      layoutId="active-locale-desktop"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">EN</span>
                </button>
              </motion.div>
            )}

            {/* Theme Toggle Button */}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-9 h-9 border-border/60 hover:bg-accent transition-all shadow-sm"
                title={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-400 transition-all transform hover:rotate-45" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-700 dark:text-slate-200 transition-all transform hover:-rotate-12" />
                )}
                <span className="sr-only">Cambiar modo claro / noche</span>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary p-2 rounded-md ${!isProjectPage && activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Language + Theme toggles */}
                {mounted && (
                  <div className="pt-6 mt-4 border-t border-border space-y-4">
                    {/* Language toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {locale === "es" ? "Idioma" : "Language"}
                      </span>
                      <div className="relative inline-flex items-center rounded-full border border-border/60 bg-muted/40 p-1 shadow-sm">
                        <button
                          type="button"
                          onClick={() => setLocale("es")}
                          className={`relative z-10 w-9 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors duration-200 ${
                            locale === "es"
                              ? "text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          aria-label="Cambiar a Español"
                        >
                          {locale === "es" && (
                            <motion.div
                              layoutId="active-locale-mobile"
                              className="absolute inset-0 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 450, damping: 32 }}
                            />
                          )}
                          <span className="relative z-10">ES</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setLocale("en")}
                          className={`relative z-10 w-9 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors duration-200 ${
                            locale === "en"
                              ? "text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          aria-label="Switch to English"
                        >
                          {locale === "en" && (
                            <motion.div
                              layoutId="active-locale-mobile"
                              className="absolute inset-0 rounded-full bg-primary"
                              transition={{ type: "spring", stiffness: 450, damping: 32 }}
                            />
                          )}
                          <span className="relative z-10">EN</span>
                        </button>
                      </div>
                    </div>

                    {/* Theme toggle */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {locale === "es" ? "Tema" : "Theme"}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="gap-2 rounded-full"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="h-4 w-4 text-yellow-400" />
                            {locale === "es" ? "Modo Claro" : "Light Mode"}
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4 text-slate-700" />
                            {locale === "es" ? "Modo Noche" : "Dark Mode"}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}