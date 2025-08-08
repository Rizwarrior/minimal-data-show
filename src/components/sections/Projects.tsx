import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface Project {
  title: string;
  problem: string;
  approach: string;
  impact: string;
  tools: string[];
  image?: string;
  video?: string;
  chartData?: { name: string; value: number }[];
}

const Projects = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<string>("All");
  const tools = useMemo(() => Array.from(new Set(projects.flatMap(p => p.tools))).sort(), [projects]);
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter(p => p.tools.includes(filter)), [projects, filter]);

  return (
    <section id="projects" className="container py-16 md:py-24 animate-fade-in" aria-labelledby="projects-title">
      <div className="flex items-center justify-between mb-6">
        <h2 id="projects-title" className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant={filter === 'All' ? 'default' : 'outline'} onClick={() => setFilter('All')}>All</Button>
          {tools.map(t => (
            <Button key={t} variant={filter === t ? 'default' : 'outline'} onClick={() => setFilter(t)}>{t}</Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p, idx) => (
          <Card key={idx} className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {p.title}
                <div className="text-xs text-muted-foreground">{p.tools.join(" · ")}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {p.image && (
                <img src={p.image} alt={`${p.title} case study cover`} loading="lazy" className="w-full rounded-md border border-border" />
              )}
              {p.video && (
                <video src={p.video} controls preload="metadata" className="w-full rounded-md border border-border" />
              )}
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground mb-1">Problem</h3>
                  <p>{p.problem}</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Approach</h3>
                  <p>{p.approach}</p>
                </div>
              </div>
              <div className="text-sm">
                <h3 className="font-medium mb-1">Impact</h3>
                <p className="text-muted-foreground">{p.impact}</p>
              </div>
              {p.chartData && p.chartData.length > 0 && (
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={p.chartData}>
                      <XAxis dataKey="name" stroke="currentColor" />
                      <YAxis stroke="currentColor" />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4,4,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
