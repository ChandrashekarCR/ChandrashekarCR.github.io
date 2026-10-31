import React, { useState } from 'react';
import { GitBranch, Link2, Mail, MapPin, Send } from 'lucide-react';
import { personalInfo, contactTopics } from '../data';
import CopyEmail from '../components/CopyEmail';
import Reveal from '../components/Reveal';
import portrait from '../assets/full_portait.jpg';

const channels = [
  { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, Icon: Mail, color: 'bg-base-a' },
  { label: 'LinkedIn', value: 'chandrashekar-c-r', href: personalInfo.linkedin, Icon: Link2, color: 'bg-base-c' },
  { label: 'GitHub', value: 'ChandrashekarCR', href: personalInfo.github, Icon: GitBranch, color: 'bg-base-g' }
];

function Contact() {
  const [form, setForm] = useState({ name: '', topic: contactTopics[0], message: '' });

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  // GitHub Pages has no backend, so the form hands off to the visitor's mail client.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `[Portfolio] ${form.topic}${form.name ? ` — ${form.name}` : ''}`;
    const body = `${form.message}\n\n— ${form.name || 'Sent from your portfolio'}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="space-y-6">
          <p className="fasta-label">contact | say_hej</p>
          <h1 className="text-4xl lg:text-[2.6rem] font-bold leading-tight">Let&apos;s build something that answers a biological question.</h1>
          <div className="base-strip w-24" />
          <p className="text-muted-foreground leading-relaxed">
            Whether it is a role, a research collaboration, a pipeline that needs taming, or just a question about one
            of my projects — I&apos;d love to hear from you.
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" /> {personalInfo.location}
          </p>
          <div className="card hidden overflow-hidden lg:block">
            <img src={portrait} alt={personalInfo.name} className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
          </div>
        </Reveal>

        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon, color }, index) => (
              <Reveal key={label} delay={index * 60}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="card hover-lift group flex h-full flex-col p-5"
                >
                  <span className={`grid h-10 w-10 place-items-center rounded-xl text-white ${color}`}>
                    <Icon size={18} />
                  </span>
                  <span className="mt-4 font-display font-semibold group-hover:text-primary">{label}</span>
                  <span className="mt-1 truncate font-mono text-xs text-muted-foreground">{value}</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Opens your email app with everything filled in — or copy the address directly:
            </p>
            <CopyEmail className="mt-3 w-full sm:w-auto" />

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Your name
                  <input
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Topic
                  <select
                    value={form.topic}
                    onChange={update('topic')}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {contactTopics.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block text-sm font-medium">
                Message
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Hi Chandrashekar, I'm working on…"
                  className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                <Send size={16} /> Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
