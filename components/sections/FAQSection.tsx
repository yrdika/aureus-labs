'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { cn } from '~/lib/utils';

const faqs = [
  {
    q: 'What services are available?',
    a: 'Aureus Labs offers landing page development, business and company profile websites, SaaS marketing sites, and dashboard / web application interfaces. We also take on redesigns and frontend implementation for existing projects.',
  },
  {
    q: 'How does the process work?',
    a: "It starts with a short discovery call to understand your goals and requirements. From there we produce a visual mockup for your review, build the approved design, and hand off the final product with deployment support.",
  },
  {
    q: 'Can an existing website be redesigned?',
    a: 'Yes — redesigns are a significant part of what we do. Whether you need a full visual overhaul or a targeted improvement to conversion flow or performance, we can scope it to fit your situation.',
  },
  {
    q: 'How can I request a quote?',
    a: 'Send an email to ramadika305@gmail.com with a brief description of your project — what it is, who it\'s for, and your rough timeline. We\'ll respond within one business day with questions or a proposal.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={cn('border border-white/8 rounded-xl overflow-hidden transition-colors', isOpen && 'border-gold-500/20')}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/4 transition-colors"
        aria-expanded={isOpen}
      >
        <span className={cn('text-sm font-medium transition-colors', isOpen ? 'text-gold-400' : 'text-cream-100')}>
          {q}
        </span>
        <span className={cn('flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors', isOpen ? 'border-gold-500/40 text-gold-500' : 'border-white/20 text-cream-200/40')}>
          {isOpen ? <Minus size={10} /> : <Plus size={10} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm text-cream-200/55 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we get asked"
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
