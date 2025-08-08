interface Cert { name: string; issuer: string; date: string }
interface Edu { degree: string; school: string; year: string }

const CertsEducation = ({ certifications, education }: { certifications: Cert[]; education: Edu[] }) => (
  <section className="container py-16 md:py-24 animate-fade-in" aria-labelledby="cred-title">
    <h2 id="cred-title" className="text-2xl font-semibold mb-6">Certifications & Education</h2>
    <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
      <div>
        <h3 className="font-medium text-foreground mb-2">Certifications</h3>
        <ul className="space-y-2">
          {certifications.map((c, i) => (
            <li key={i}>{c.name} — {c.issuer} ({c.date})</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-foreground mb-2">Education</h3>
        <ul className="space-y-2">
          {education.map((e, i) => (
            <li key={i}>{e.degree} — {e.school} ({e.year})</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
export default CertsEducation;
