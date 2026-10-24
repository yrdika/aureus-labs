'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Download,
  Filter,
  Home,
  Search,
  Settings,
  ShoppingCart,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { DemoBar, DemoCredit } from '~/components/demos/DemoChrome';
import { PageMeta } from '~/components/PageMeta';
import { useLanguage } from '~/lib/i18n/LanguageProvider';
import { cn } from '~/lib/utils';

const navIcons: LucideIcon[] = [Home, BarChart3, Users, ShoppingCart, TrendingUp, Settings];

const kpiMeta = [
  { value: '$284,920', up: true, color: '#f59e0b', spark: [38, 52, 44, 61, 55, 70, 64, 78, 72, 85, 80, 94] },
  { value: '12,481', up: true, color: '#10b981', spark: [30, 36, 48, 42, 55, 60, 52, 66, 71, 68, 80, 88] },
  { value: '3,247', up: true, color: '#818cf8', spark: [60, 55, 64, 58, 70, 66, 62, 74, 70, 78, 75, 82] },
  { value: '$87.75', up: false, color: '#f87171', spark: [80, 76, 82, 74, 70, 77, 68, 72, 64, 66, 60, 58] },
];

const rowMeta = [
  { revenue: '$48,200', orders: 241, conv: '3.8%', trend: 'up' },
  { revenue: '$31,450', orders: 629, conv: '2.9%', trend: 'up' },
  { revenue: '$18,770', orders: 938, conv: '5.2%', trend: 'up' },
  { revenue: '$9,840', orders: 164, conv: '1.4%', trend: 'down' },
  { revenue: '$71,200', orders: 4, conv: '100%', trend: 'up' },
  { revenue: '$5,460', orders: 91, conv: '91%', trend: 'neutral' },
] as const;

const barHeights = [55, 70, 45, 80, 65, 90, 72, 85, 60, 95, 78, 88, 82, 92, 75, 88, 70, 94, 85, 100, 90, 95, 88, 96, 92, 98, 85, 94, 90, 97];
const rangeKeys = ['7d', '30d', '90d', '1y'] as const;

export function AnalyticsDashboard() {
  const { t } = useLanguage();
  const p = t.dashboard;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeRange, setActiveRange] = useState<(typeof rangeKeys)[number]>('30d');
  const [query, setQuery] = useState('');

  const rows = p.rows
    .map((row, i) => ({ ...row, ...rowMeta[i] }))
    .filter((row) => `${row.name} ${row.category}`.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <>
      <PageMeta page="dashboard" />
      <DemoBar name={t.projects['analytics-dashboard'].title} notice={p.notice} />

      <div className="relative z-10 flex min-h-screen flex-col bg-[#09090e] text-gray-100">
        <div className="flex flex-1 overflow-hidden">
          <aside
            className={cn(
              'flex shrink-0 flex-col border-r border-white/10 bg-[#0d0d14] transition-all duration-200',
              sidebarOpen ? 'w-14 md:w-56' : 'w-14',
            )}
          >
            <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500">
                <BarChart3 size={13} aria-hidden="true" className="text-black" />
              </div>
              {sidebarOpen && <span className="hidden text-sm font-bold text-white md:inline">Pulse</span>}
            </div>

            <nav className="flex flex-1 flex-col gap-0.5 px-2 py-3">
              {p.nav.map((label, i) => {
                const Icon = navIcons[i];
                const active = i === 0;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors',
                      active
                        ? 'border border-amber-500/25 bg-amber-500/15 text-amber-300'
                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200',
                    )}
                  >
                    <Icon size={14} aria-hidden="true" className="shrink-0" />
                    {sidebarOpen && <span className="hidden md:inline">{label}</span>}
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label={sidebarOpen ? p.sidebarCollapse : p.sidebarExpand}
              aria-expanded={sidebarOpen}
              className="m-3 hidden rounded-lg border border-white/10 p-2 text-xs text-gray-400 transition-colors hover:bg-white/5 hover:text-gray-200 md:block"
            >
              <span aria-hidden="true">{sidebarOpen ? '←' : '→'}</span>
            </button>
          </aside>

          <main className="flex-1 overflow-auto">
            <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-white/10 bg-[#09090e]/95 px-4 py-3 backdrop-blur-sm md:px-6">
              <div>
                <h1 className="text-base font-semibold text-white">{p.title}</h1>
                <p className="text-xs text-gray-400">{p.updated}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-white/5 p-0.5" role="group">
                  {rangeKeys.map((key) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={activeRange === key}
                      onClick={() => setActiveRange(key)}
                      className={cn(
                        'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                        activeRange === key ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white',
                      )}
                    >
                      {p.ranges[key]}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label={p.notifications}
                  className="rounded-lg border border-white/10 p-2 text-gray-400 transition-colors hover:text-white"
                >
                  <Bell size={14} aria-hidden="true" />
                </button>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black" aria-hidden="true">
                  J
                </div>
              </div>
            </header>

            <div className="flex flex-col gap-6 p-4 md:p-6">
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {p.kpis.map((kpi, i) => {
                  const meta = kpiMeta[i];
                  return (
                    <div key={kpi.label} className="rounded-xl border border-white/10 bg-[#0d0d14] p-4">
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-xs text-gray-400">{kpi.label}</p>
                        <ArrowUpRight size={12} aria-hidden="true" className="text-gray-500" />
                      </div>
                      <p className="text-2xl font-bold text-white">{meta.value}</p>
                      <div className={`mt-1.5 flex items-center gap-1 text-xs font-medium ${meta.up ? 'text-emerald-400' : 'text-red-400'}`}>
                        {meta.up ? <ChevronUp size={12} aria-hidden="true" /> : <ChevronDown size={12} aria-hidden="true" />}
                        {kpi.change} {p.vsPrevious}
                      </div>
                      <div className="mt-3 flex h-8 items-end gap-0.5" aria-hidden="true">
                        {meta.spark.map((h, k) => (
                          <div
                            key={k}
                            className="flex-1 rounded-sm"
                            style={{ height: `${h}%`, background: `${meta.color}${k === meta.spark.length - 1 ? 'dd' : '44'}` }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-white">{p.revenueTitle}</h2>
                    <p className="mt-0.5 text-xs text-gray-400">{p.revenueSub}</p>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:text-white"
                  >
                    <Download size={11} aria-hidden="true" />
                    {p.export}
                  </button>
                </div>
                <div className="flex h-36 items-end gap-1" role="img" aria-label={p.revenueTitle}>
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 cursor-pointer rounded-t-sm transition-opacity hover:opacity-80"
                      style={{ height: `${h}%`, background: `rgba(245,158,11,${0.25 + h / 300})` }}
                      title={`${p.dayLabel} ${i + 1}: $${(h * 95).toLocaleString('en-US')}`}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-2xs text-gray-400" aria-hidden="true">
                  {p.axis.map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d14]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5">
                  <h2 className="text-sm font-semibold text-white">{p.tableTitle}</h2>
                  <div className="flex items-center gap-2">
                    <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                      <Search size={12} aria-hidden="true" className="text-gray-400" />
                      <span className="sr-only">{p.searchLabel}</span>
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-28 bg-transparent text-xs text-gray-200 outline-none placeholder:text-gray-500"
                        placeholder={p.search}
                      />
                    </label>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:text-white"
                    >
                      <Filter size={11} aria-hidden="true" />
                      {p.filter}
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th scope="col" className="px-5 py-3 text-left font-medium">{p.cols[0]}</th>
                        <th scope="col" className="px-4 py-3 text-left font-medium">{p.cols[1]}</th>
                        <th scope="col" className="px-4 py-3 text-right font-medium">{p.cols[2]}</th>
                        <th scope="col" className="px-4 py-3 text-right font-medium">{p.cols[3]}</th>
                        <th scope="col" className="px-5 py-3 text-right font-medium">{p.cols[4]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.name} className="border-b border-white/5 transition-colors hover:bg-white/[0.04]">
                          <td className="px-5 py-3 font-medium text-white">{row.name}</td>
                          <td className="px-4 py-3">
                            <span className="rounded-full bg-white/10 px-2 py-0.5 text-gray-300">{row.category}</span>
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-amber-300">{row.revenue}</td>
                          <td className="px-4 py-3 text-right text-gray-300">{row.orders}</td>
                          <td className="px-5 py-3 text-right">
                            <span
                              className={`font-medium ${row.trend === 'up' ? 'text-emerald-400' : row.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}
                            >
                              {row.conv}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {rows.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-5 py-8 text-center text-gray-400">
                            {p.empty}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-gray-400">
                  <span>{p.showing.replace('{n}', String(rows.length))}</span>
                  <div className="flex gap-2">
                    <button type="button" className="rounded border border-white/10 px-3 py-1 transition-colors hover:text-white">{p.prev}</button>
                    <button type="button" className="rounded border border-white/10 px-3 py-1 transition-colors hover:text-white">{p.next}</button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <DemoCredit />
    </>
  );
}
