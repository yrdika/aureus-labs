'use client';

import { useId, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Button } from '~/components/ui/Button';
import { Reveal } from '~/components/ui/Reveal';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { SITE } from '~/lib/site';
import { cn } from '~/lib/utils';

type FieldName = 'name' | 'email' | 'message';
type ErrorKey = 'nameRequired' | 'emailRequired' | 'emailInvalid' | 'messageRequired' | 'messageShort';
type Status = 'idle' | 'error' | 'success';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldClass =
  'w-full rounded-xl border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

export function ContactSection() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const baseId = useId();

  const [values, setValues] = useState({ name: '', email: '', type: 0, message: '' });
  const [errors, setErrors] = useState<Partial<Record<FieldName, ErrorKey>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  function validate(next = values) {
    const found: Partial<Record<FieldName, ErrorKey>> = {};
    if (!next.name.trim()) found.name = 'nameRequired';
    if (!next.email.trim()) found.email = 'emailRequired';
    else if (!EMAIL_PATTERN.test(next.email.trim())) found.email = 'emailInvalid';
    if (!next.message.trim()) found.message = 'messageRequired';
    else if (next.message.trim().length < 10) found.message = 'messageShort';
    return found;
  }

  function update<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (status === 'error' && key !== 'type') setErrors(validate(next));
    if (status === 'success') setStatus('idle');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus('error');
      const first = (['name', 'email', 'message'] as FieldName[]).find((key) => found[key]);
      if (first) refs[first].current?.focus();
      return;
    }

    const body = [
      `${f.mail.name}: ${values.name.trim()}`,
      `${f.mail.email}: ${values.email.trim()}`,
      `${f.mail.type}: ${f.typeOptions[values.type]}`,
      '',
      `${f.mail.message}:`,
      values.message.trim(),
    ].join('\n');

    setStatus('success');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(f.mail.subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldError = (name: FieldName) => (errors[name] ? f.errors[errors[name] as ErrorKey] : null);

  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="label flex items-center gap-3">
              <span className="text-accent">07</span>
              <span aria-hidden="true" className="inline-block h-px w-8 bg-line" />
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-ink text-balance md:text-6xl">
              {t.contact.titleLead} <span className="italic text-accent">{t.contact.titleEmphasis}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">{t.contact.description}</p>

            <dl className="mt-10 flex flex-col gap-6 border-t border-line pt-8">
              <div>
                <dt className="label">{t.contact.emailLabel}</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 text-base text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    <Mail size={15} aria-hidden="true" />
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                  {t.contact.availability}
                </span>
                <span>{t.contact.response}</span>
              </div>
            </dl>

            <Button href="/work" variant="outline" className="mt-10">
              {t.contact.seeWork}
            </Button>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              aria-describedby={`${baseId}-note`}
              className="rounded-2xl border border-line bg-surface p-6 md:p-9"
            >
              {status === 'error' && Object.keys(errors).length > 0 && (
                <p role="alert" className="mb-6 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink">
                  {f.errors.summary}
                </p>
              )}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor={`${baseId}-name`} className="mb-2 block text-sm font-medium text-ink">
                    {f.name} <span className="font-normal text-muted">({f.required})</span>
                  </label>
                  <input
                    ref={refs.name}
                    id={`${baseId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={f.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${baseId}-name-err` : undefined}
                    className={cn(fieldClass, errors.name ? 'border-accent' : 'border-line')}
                  />
                  {errors.name && (
                    <p id={`${baseId}-name-err`} className="mt-2 text-xs text-accent">
                      {fieldError('name')}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${baseId}-email`} className="mb-2 block text-sm font-medium text-ink">
                    {f.email} <span className="font-normal text-muted">({f.required})</span>
                  </label>
                  <input
                    ref={refs.email}
                    id={`${baseId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder={f.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${baseId}-email-err` : undefined}
                    className={cn(fieldClass, errors.email ? 'border-accent' : 'border-line')}
                  />
                  {errors.email && (
                    <p id={`${baseId}-email-err`} className="mt-2 text-xs text-accent">
                      {fieldError('email')}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor={`${baseId}-type`} className="mb-2 block text-sm font-medium text-ink">
                  {f.type}
                </label>
                <select
                  id={`${baseId}-type`}
                  name="type"
                  value={values.type}
                  onChange={(e) => update('type', Number(e.target.value))}
                  className={cn(fieldClass, 'border-line')}
                >
                  {f.typeOptions.map((option, i) => (
                    <option key={option} value={i}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor={`${baseId}-message`} className="mb-2 block text-sm font-medium text-ink">
                  {f.message} <span className="font-normal text-muted">({f.required})</span>
                </label>
                <textarea
                  ref={refs.message}
                  id={`${baseId}-message`}
                  name="message"
                  rows={5}
                  maxLength={1500}
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder={f.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${baseId}-message-err` : undefined}
                  className={cn(fieldClass, 'resize-y', errors.message ? 'border-accent' : 'border-line')}
                />
                {errors.message && (
                  <p id={`${baseId}-message-err`} className="mt-2 text-xs text-accent">
                    {fieldError('message')}
                  </p>
                )}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg">
                  {f.submit}
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
                <p id={`${baseId}-note`} className="max-w-xs text-xs leading-relaxed text-muted">
                  {f.note}
                </p>
              </div>

              {status === 'success' && (
                <div
                  role="status"
                  className="mt-7 flex gap-3 rounded-xl border border-line bg-bg px-4 py-4 text-sm text-ink"
                >
                  <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">{f.success.title}</p>
                    <p className="mt-1 text-muted">
                      {f.success.body}{' '}
                      <a href={`mailto:${SITE.email}`} className="text-ink underline underline-offset-4">
                        {SITE.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
