import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

const Header = () => {
  const { data } = usePortfolioData();
  const name = data?.person.name ?? "Your Name";
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-semibold">{name}</a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground story-link">About</a>
          <a href="#experience" className="hover:text-foreground story-link">Experience</a>
          <a href="#projects" className="hover:text-foreground story-link">Projects</a>
          <a href="#skills" className="hover:text-foreground story-link">Skills</a>
          <a href="#contact" className="hover:text-foreground story-link">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
