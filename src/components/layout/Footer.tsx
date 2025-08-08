import { Github, Linkedin } from "lucide-react";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

const Footer = () => {
  const { data } = usePortfolioData();
  const name = data?.person.name ?? "Your Name";
  const email = data?.person.email ?? "you@example.com";
  const linkedin = data?.person.linkedin;
  const github = data?.person.github;

  return (
    <footer className="border-t border-border mt-16">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <nav className="flex items-center gap-4" aria-label="Footer">
          <a href="#projects" className="hover:text-foreground">Work</a>
          <a href={`mailto:${email}`} className="hover:text-foreground">Email</a>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github size={18} /></a>
          )}
          <a href="/cv.pdf" className="hover:text-foreground" download>Download CV</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
