import { useEffect, useState } from "react";

export interface PortfolioData {
  person: { name: string; title: string; email: string; location: string; summary: string; linkedin?: string; github?: string };
  experience: { role: string; company: string; start: string; end: string; impacts: string[] }[];
  projects: { title: string; problem: string; approach: string; impact: string; tools: string[]; image?: string; video?: string; chartData?: { name: string; value: number }[] }[];
  skills: string[];
  certifications: { name: string; issuer: string; date: string }[];
  education: { degree: string; school: string; year: string }[];
  testimonials: { quote: string; author: string; role: string }[];
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return { data };
};
