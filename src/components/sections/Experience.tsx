interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  impacts: string[];
}

const Experience = ({ items }: { items: ExperienceItem[] }) => (
  <section id="experience" className="container py-16 md:py-24" aria-labelledby="experience-title">
    <h2 id="experience-title" className="text-2xl font-semibold mb-8">Experience</h2>
    <ol className="relative border-l border-border space-y-10">
      {items.map((item, idx) => (
        <li key={idx} className="ml-6">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" aria-hidden />
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-medium">{item.role}</span>
              <span className="text-muted-foreground">@ {item.company}</span>
              <span className="text-sm text-muted-foreground">({item.start} – {item.end})</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              {item.impacts.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
