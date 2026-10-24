import { BrowserFrame } from './BrowserFrame';

/* Mockups are drawn on a 100em-wide canvas; font-size: 1cqw scales them to the frame width. */
const root = { fontSize: '1cqw' } as const;

function DentalMock() {
  return (
    <div className="h-full w-full bg-[#f3fbf8] text-[#12302b]" style={root}>
      <div className="flex items-center justify-between px-[5em] py-[3em]">
        <div className="flex items-center gap-[1.2em]">
          <span className="h-[3.2em] w-[3.2em] rounded-full bg-[#2a9d8f]" />
          <span className="h-[1.4em] w-[14em] rounded-full bg-[#12302b]/70" />
        </div>
        <div className="flex gap-[2.4em]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[1.1em] w-[6em] rounded-full bg-[#12302b]/25" />
          ))}
        </div>
        <span className="h-[3.6em] w-[13em] rounded-[0.9em] bg-[#2a9d8f]" />
      </div>
      <div className="grid grid-cols-[1.1fr_0.9fr] gap-[4em] px-[5em]">
        <div className="pt-[2em]">
          <span className="block h-[2.6em] w-[24em] rounded-full bg-[#ccefe8]" />
          <span className="mt-[2.4em] block h-[3.6em] w-[38em] rounded-[0.8em] bg-[#12302b]" />
          <span className="mt-[1.2em] block h-[3.6em] w-[26em] rounded-[0.8em] bg-[#2a9d8f]" />
          <span className="mt-[2.4em] block h-[1.2em] w-[40em] rounded-full bg-[#12302b]/20" />
          <span className="mt-[1em] block h-[1.2em] w-[32em] rounded-full bg-[#12302b]/20" />
          <div className="mt-[3em] flex gap-[1.5em]">
            <span className="h-[4.2em] w-[17em] rounded-[1em] bg-[#2a9d8f]" />
            <span className="h-[4.2em] w-[12em] rounded-[1em] border-[0.25em] border-[#2a9d8f]/40" />
          </div>
        </div>
        <div className="relative h-[36em] rounded-[2em] bg-gradient-to-br from-[#ccefe8] to-[#e6f8fb]">
          <span className="absolute left-1/2 top-[5em] h-[12em] w-[10em] -translate-x-1/2 rounded-[45%_45%_40%_40%] bg-white shadow-[0_1em_2em_-1em_rgb(18_48_43/0.35)]" />
          <div className="absolute bottom-[3em] left-[3em] right-[3em] rounded-[1.2em] bg-white p-[2em] shadow-[0_1em_2em_-1em_rgb(18_48_43/0.25)]">
            <span className="block h-[1.1em] w-[12em] rounded-full bg-[#12302b]/30" />
            <span className="mt-[1em] block h-[1.8em] w-[18em] rounded-full bg-[#2a9d8f]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const saasBars = [40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92];

function SaasMock() {
  return (
    <div className="h-full w-full bg-[#0b0b14]" style={root}>
      <div className="flex items-center justify-between px-[5em] py-[3em]">
        <div className="flex items-center gap-[1.2em]">
          <span className="h-[3.2em] w-[3.2em] rounded-[0.8em] bg-[#4f46e5]" />
          <span className="h-[1.4em] w-[13em] rounded-full bg-white/70" />
        </div>
        <div className="flex gap-[2.4em]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[1.1em] w-[6em] rounded-full bg-white/20" />
          ))}
        </div>
        <span className="h-[3.6em] w-[13em] rounded-[0.9em] bg-[#4f46e5]" />
      </div>
      <div className="flex flex-col items-center px-[5em] pt-[1em]">
        <span className="h-[2.4em] w-[26em] rounded-full border-[0.2em] border-[#6366f1]/40 bg-[#6366f1]/15" />
        <span className="mt-[2.2em] block h-[3.6em] w-[48em] rounded-[0.8em] bg-white" />
        <span className="mt-[1.1em] block h-[3.6em] w-[32em] rounded-[0.8em] bg-gradient-to-r from-[#818cf8] to-[#a78bfa]" />
        <div className="mt-[2.6em] flex gap-[1.5em]">
          <span className="h-[4em] w-[20em] rounded-[1em] bg-[#4f46e5]" />
          <span className="h-[4em] w-[14em] rounded-[1em] border-[0.25em] border-white/20" />
        </div>
      </div>
      <div className="mx-[8em] mt-[3.4em] grid grid-cols-4 gap-[1.6em]">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-[1em] border-[0.15em] border-[#4f46e5]/30 bg-[#161628] p-[1.6em]">
            <span className="block h-[1em] w-[7em] rounded-full bg-white/25" />
            <span className="mt-[1em] block h-[2em] w-[11em] rounded-full bg-white/80" />
          </div>
        ))}
      </div>
      <div className="mx-[8em] mt-[1.6em] flex h-[11em] items-end gap-[0.8em] rounded-[1em] border-[0.15em] border-[#4f46e5]/30 bg-[#161628] p-[2em]">
        {saasBars.map((h, i) => (
          <span key={i} className="flex-1 rounded-t-[0.3em] bg-[#6366f1]" style={{ height: `${h}%`, opacity: 0.35 + h / 200 }} />
        ))}
      </div>
    </div>
  );
}

const pulseBars = [55, 70, 45, 80, 65, 90, 72, 85, 60, 95, 78, 88, 82, 92, 75, 88, 70, 94, 85, 100];

function PulseMock() {
  return (
    <div className="flex h-full w-full bg-[#09090e]" style={root}>
      <div className="w-[16em] shrink-0 border-r-[0.15em] border-white/10 bg-[#0d0d14] p-[2em]">
        <div className="flex items-center gap-[1em]">
          <span className="h-[3em] w-[3em] rounded-[0.8em] bg-[#f59e0b]" />
          <span className="h-[1.3em] w-[6em] rounded-full bg-white/70" />
        </div>
        <div className="mt-[3em] flex flex-col gap-[1.2em]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={`h-[2.6em] rounded-[0.7em] ${i === 0 ? 'bg-[#f59e0b]/20' : 'bg-white/6'}`} />
          ))}
        </div>
      </div>
      <div className="flex-1 p-[3em]">
        <div className="flex items-center justify-between">
          <span className="h-[1.8em] w-[14em] rounded-full bg-white/80" />
          <span className="h-[3em] w-[18em] rounded-[0.8em] bg-white/8" />
        </div>
        <div className="mt-[2.4em] grid grid-cols-4 gap-[1.4em]">
          {['#f59e0b', '#10b981', '#6366f1', '#ef4444'].map((c) => (
            <div key={c} className="rounded-[1em] border-[0.15em] border-white/10 bg-[#0d0d14] p-[1.4em]">
              <span className="block h-[0.9em] w-[6em] rounded-full bg-white/25" />
              <span className="mt-[0.9em] block h-[1.8em] w-[9em] rounded-full bg-white/80" />
              <span className="mt-[1em] block h-[0.7em] w-full rounded-full opacity-60" style={{ background: c }} />
            </div>
          ))}
        </div>
        <div className="mt-[1.6em] flex h-[17em] items-end gap-[0.6em] rounded-[1em] border-[0.15em] border-white/10 bg-[#0d0d14] p-[2em]">
          {pulseBars.map((h, i) => (
            <span key={i} className="flex-1 rounded-t-[0.3em]" style={{ height: `${h}%`, background: `rgba(245,158,11,${0.25 + h / 300})` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const frames = {
  'dental-clinic': { url: 'brightsmile.example', Mock: DentalMock },
  'saas-platform': { url: 'flowmetric.example', Mock: SaasMock },
  'analytics-dashboard': { url: 'pulse.example/dashboard', Mock: PulseMock },
} as const;

export type MockSlug = keyof typeof frames;

export function ProjectMock({ slug, className }: { slug: MockSlug; className?: string }) {
  const { url, Mock } = frames[slug];
  return (
    <BrowserFrame url={url} className={className}>
      <Mock />
    </BrowserFrame>
  );
}
