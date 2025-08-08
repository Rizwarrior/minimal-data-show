const Skills = ({ skills }: { skills: string[] }) => (
  <section id="skills" className="container py-16 md:py-24 animate-fade-in" aria-labelledby="skills-title">
    <h2 id="skills-title" className="text-2xl font-semibold mb-6">Skills</h2>
    <ul className="flex flex-wrap gap-2">
      {skills.map((s, i) => (
        <li key={i} className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground">{s}</li>
      ))}
    </ul>
  </section>
);
export default Skills;
