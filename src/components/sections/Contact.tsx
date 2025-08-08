import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";

const Contact = ({ email }: { email: string }) => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${email}?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + from)}`;
    track('cta_click', { cta: 'contact_submit' });
    window.location.href = mailto;
    toast({ title: "Opening your email client..." });
  };

  return (
    <section id="contact" className="container py-16 md:py-24 animate-fade-in" aria-labelledby="contact-title">
      <h2 id="contact-title" className="text-2xl font-semibold mb-6">Contact</h2>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <label className="grid gap-1 text-sm">
          <span>Name</span>
          <input className="h-10 rounded-md border border-input bg-background px-3" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Email</span>
          <input type="email" className="h-10 rounded-md border border-input bg-background px-3" value={from} onChange={e => setFrom(e.target.value)} required />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Message</span>
          <textarea className="min-h-[120px] rounded-md border border-input bg-background p-3" value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <div>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
