import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { track } from "@/lib/analytics";

interface Person {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
}

const Hero = ({ person }: { person: Person }) => {
  return (
    <section className="container pt-20 md:pt-28" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        <div className="md:col-span-2">
          <motion.h1
            id="hero-title"
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {person.name}
          </motion.h1>
          <p className="mt-2 text-lg text-muted-foreground">{person.title} — {person.location}</p>
          <motion.p
            className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {person.summary}
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/cv.pdf" download onClick={() => track('cta_click', { cta: 'download_cv' })}>
              <Button>Download CV</Button>
            </a>
            <a href={`mailto:${person.email}`} onClick={() => track('cta_click', { cta: 'email' })}>
              <Button variant="secondary">Email</Button>
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View CV</Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>CV — {person.name}</DialogTitle>
                </DialogHeader>
                <div className="aspect-[4/3] w-full">
                  <iframe title="CV PDF" src="/cv.pdf" className="w-full h-[70vh]" />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:justify-self-end"
        >
          <img
            src="/images/headshot.webp"
            alt="Professional headshot of data analyst Your Name"
            width={320}
            height={320}
            className="rounded-lg border border-border object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
