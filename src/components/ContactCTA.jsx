import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data';
import CopyEmail from './CopyEmail';
import DnaHelix from './DnaHelix';
import Reveal from './Reveal';

// Call-to-action band shown above the footer on every page except /contact.
function ContactCTA() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-16">
      <Reveal className="relative overflow-hidden rounded-3xl bg-ink text-white ring-1 ring-white/5 px-6 py-10 sm:px-10 md:py-14">
        <DnaHelix className="pointer-events-none absolute inset-x-0 bottom-0 opacity-25" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-mono text-xs text-[#9fe3d6]">&gt;status | {personalInfo.availability}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Have a pipeline, a dataset, or a role in mind?
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Tell me what you are building — I&apos;d love to hear about it and see how I can help.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              <Mail size={18} /> Email me
            </a>
            <Link to="/contact" className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20">
              All contact options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="relative mt-6 hidden sm:block">
          <CopyEmail className="bg-white/5! text-white/80! border-white/15! hover:text-white!" />
        </div>
      </Reveal>
    </section>
  );
}

export default ContactCTA;
