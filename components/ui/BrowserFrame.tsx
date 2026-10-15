interface BrowserFrameProps {
  children: React.ReactNode;
  accent?: string;
  url?: string;
}

export function BrowserFrame({ children, accent = '#c9a84c', url = 'aureuslabs.dev' }: BrowserFrameProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-charcoal-800">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-charcoal-700/80 border-b border-white/8">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex-1 flex justify-center">
          <div
            className="px-4 py-0.5 rounded-full bg-charcoal-900/60 border border-white/8 text-2xs text-cream-200/40 font-mono"
          >
            {url}
          </div>
        </div>
        <div className="w-10" />
      </div>
      {/* Content */}
      <div style={{ borderTop: `2px solid ${accent}22` }}>
        {children}
      </div>
    </div>
  );
}
