const Footer = () => {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <nav className="flex items-center gap-4" aria-label="Footer">
          <a href="#projects" className="hover:text-foreground">Work</a>
          <a href="mailto:you@example.com" className="hover:text-foreground">Email</a>
          <a href="/cv.pdf" className="hover:text-foreground" download>Download CV</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
