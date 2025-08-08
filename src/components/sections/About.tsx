interface AboutProps { summary: string }
const About = ({ summary }: AboutProps) => (
  <section id="about" className="container py-16 md:py-24" aria-labelledby="about-title">
    <h2 id="about-title" className="text-2xl font-semibold mb-6">About</h2>
    <p className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">{summary}</p>
  </section>
);
export default About;
