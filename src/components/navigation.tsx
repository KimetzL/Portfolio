"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if we're on a project page
  const isProjectPage = pathname?.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only update active section if we're not on a project page
      if (!isProjectPage) {
        const sections = navItems.map(item => item.href.substring(1));
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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${!isProjectPage && activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {item.name}
                {!isProjectPage && activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle Button (Sol / Luna) */}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-9 h-9 border-border/60 hover:bg-accent transition-all shadow-sm"
                title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Noche"}
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
                    key={item.name}
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

                {/* Mobile Theme Toggle */}
                {mounted && (
                  <div className="pt-6 mt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Tema
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="gap-2 rounded-full"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4 text-yellow-400" /> Modo Claro
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 text-slate-700" /> Modo Noche
                        </>
                      )}
                    </Button>
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