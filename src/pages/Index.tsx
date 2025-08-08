import { useEffect, useMemo, useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import CertsEducation from "@/components/sections/CertsEducation";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import { usePortfolioData } from "@/hooks/use-portfolio-data";

const Index = () => {
  const { data } = usePortfolioData();

  // Generate minimal Person JSON-LD when data is loaded
  const jsonLd = useMemo(() => {
    if (!data) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.person.name,
      jobTitle: data.person.title,
      email: `mailto:${data.person.email}`,
      address: data.person.location,
      url: typeof window !== 'undefined' ? window.location.origin : undefined,
    };
  }, [data]);

  useEffect(() => {
    document.title = `${data?.person.name ?? "Data Analyst"} — Portfolio`;
  }, [data]);

  if (!data) return null;

  return (
    <main>
      <Hero person={data.person} />
      <About summary={data.person.summary} />
      <Experience items={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <CertsEducation certifications={data.certifications} education={data.education} />
      <Testimonials testimonials={data.testimonials} />
      <Contact email={data.person.email} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </main>
  );
};

export default Index;
