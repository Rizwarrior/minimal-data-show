interface Testimonial { quote: string; author: string; role: string }

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <section className="container py-16 md:py-24 animate-fade-in" aria-labelledby="testimonials-title">
    <h2 id="testimonials-title" className="text-2xl font-semibold mb-6">Testimonials</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <figure key={i} className="rounded-lg border border-border p-6">
          <blockquote className="text-muted-foreground">“{t.quote}”</blockquote>
          <figcaption className="mt-3 text-sm">— {t.author}, <span className="text-muted-foreground">{t.role}</span></figcaption>
        </figure>
      ))}
    </div>
  </section>
);
export default Testimonials;
