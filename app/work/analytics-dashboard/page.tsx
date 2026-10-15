'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3, Home, Users, ShoppingCart, TrendingUp, Settings,
  Bell, Search, ChevronUp, ChevronDown, ArrowUpRight, Filter, Download
} from 'lucide-react';

const kpis = [
  { label: 'Total Revenue', value: '$284,920', change: '+18.2%', up: true, color: '#f59e0b' },
  { label: 'Active Users', value: '12,481', change: '+9.7%', up: true, color: '#10b981' },
  { label: 'Orders', value: '3,247', change: '+4.1%', up: true, color: '#6366f1' },
  { label: 'Avg. Order Value', value: '$87.75', change: '-2.3%', up: false, color: '#ef4444' },
];

const tableData = [
  { name: 'Pro Plan — Annual', category: 'Subscription', revenue: '$48,200', orders: 241, conv: '3.8%', trend: 'up' },
  { name: 'Pro Plan — Monthly', category: 'Subscription', revenue: '$31,450', orders: 629, conv: '2.9%', trend: 'up' },
  { name: 'Starter Plan', category: 'Subscription', revenue: '$18,770', orders: 938, conv: '5.2%', trend: 'up' },
  { name: 'Add-on: Extra Seats', category: 'Add-on', revenue: '$9,840', orders: 164, conv: '1.4%', trend: 'down' },
  { name: 'Enterprise (Custom)', category: 'Enterprise', revenue: '$71,200', orders: 4, conv: '100%', trend: 'up' },
  { name: 'One-time Setup Fee', category: 'Services', revenue: '$5,460', orders: 91, conv: '91%', trend: 'neutral' },
];

const navItems = [
  { icon: Home, label: 'Overview', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: TrendingUp, label: 'Growth', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function AnalyticsDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeRange, setActiveRange] = useState('30d');

  const barHeights = [55, 70, 45, 80, 65, 90, 72, 85, 60, 95, 78, 88, 82, 92, 75, 88, 70, 94, 85, 100, 90, 95, 88, 96, 92, 98, 85, 94, 90, 97];

  return (
    <div className="bg-[#09090e] text-gray-100 min-h-screen flex flex-col">
      {/* Demo notice */}
      <div className="bg-amber-900/80 text-amber-200 text-xs text-center py-2 px-4 flex-shrink-0">
        <span className="font-semibold">Demo Project</span> — Pulse Dashboard is a fictional concept by{' '}
        <Link href="/" className="underline hover:text-white">Aureus Labs</Link>. All data is illustrative.{' '}
        <Link href="/work" className="underline hover:text-white">← Back to portfolio</Link>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-56' : 'w-14'} transition-all duration-200 flex-shrink-0 border-r border-white/8 bg-[#0d0d14] flex flex-col`}>
          {/* Logo */}
          <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/8">
            <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
              <BarChart3 size={13} className="text-white" />
            </div>
            {sidebarOpen && <span className="font-bold text-white text-sm">Pulse</span>}
          </div>

          {/* Nav */}
          <nav className="flex-1 py-3 px-2 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm transition-colors w-full ${
                    item.active
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/6'
                  }`}
                >
                  <Icon size={14} className="flex-shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Collapse toggle */}
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="m-3 p-2 rounded-lg border border-white/8 text-gray-500 hover:text-gray-300 hover:bg-white/6 transition-colors text-xs"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto">
          {/* Topbar */}
          <header className="sticky top-0 z-10 bg-[#09090e]/95 backdrop-blur-sm border-b border-white/8 px-6 py-3 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-base font-semibold text-white">Overview</h1>
              <p className="text-xs text-gray-500">Last updated 2 minutes ago</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-white/6 rounded-lg p-0.5">
                {['7d','30d','90d','1y'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setActiveRange(r)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${activeRange === r ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <button className="p-2 rounded-lg border border-white/8 text-gray-400 hover:text-white transition-colors">
                <Bell size={14} />
              </button>
              <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-black">J</div>
            </div>
          </header>

          <div className="p-6 flex flex-col gap-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-[#0d0d14] rounded-xl border border-white/8 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-gray-500">{kpi.label}</p>
                    <ArrowUpRight size={12} className="text-gray-600" />
                  </div>
                  <p className="text-2xl font-bold text-white">{kpi.value}</p>
                  <div className={`flex items-center gap-1 mt-1.5 text-xs font-medium ${kpi.up ? 'text-emerald-400' : 'text-red-400'}`}>
                    {kpi.up ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    {kpi.change} vs last period
                  </div>
                  {/* Mini sparkline */}
                  <div className="flex items-end gap-0.5 h-8 mt-3">
                    {[...Array(12)].map((_, i) => {
                      const h = 30 + Math.floor(Math.random() * 70);
                      return <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `${kpi.color}${i === 11 ? 'dd' : '44'}` }} />;
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="bg-[#0d0d14] rounded-xl border border-white/8 p-5">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-white">Revenue over time</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Daily — last 30 days</p>
                </div>
                <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white border border-white/8 px-3 py-1.5 rounded-lg transition-colors">
                  <Download size={11} />
                  Export
                </button>
              </div>
              <div className="flex items-end gap-1 h-36">
                {barHeights.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all hover:opacity-80"
                    style={{ height: `${h}%`, background: `rgba(245,158,11,${0.25 + (h / 300)})`, cursor: 'pointer' }}
                    title={`Day ${i + 1}: $${(h * 95).toLocaleString()}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-2xs text-gray-600">
                <span>Sep 15</span><span>Sep 22</span><span>Sep 29</span><span>Oct 6</span><span>Oct 13</span>
              </div>
            </div>

            {/* Table */}
            <div className="bg-[#0d0d14] rounded-xl border border-white/8 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-white/8">
                <h3 className="text-sm font-semibold text-white">Revenue by product</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white/6 border border-white/8 rounded-lg px-3 py-1.5">
                    <Search size={12} className="text-gray-500" />
                    <input className="text-xs bg-transparent text-gray-300 outline-none w-24 placeholder-gray-600" placeholder="Search..." />
                  </div>
                  <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white border border-white/8 px-3 py-1.5 rounded-lg transition-colors">
                    <Filter size={11} />
                    Filter
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-gray-500 border-b border-white/8">
                      <th className="text-left px-5 py-3 font-medium">Product</th>
                      <th className="text-left px-4 py-3 font-medium">Category</th>
                      <th className="text-right px-4 py-3 font-medium">Revenue</th>
                      <th className="text-right px-4 py-3 font-medium">Orders</th>
                      <th className="text-right px-5 py-3 font-medium">Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <tr key={i} className="border-b border-white/6 hover:bg-white/4 transition-colors">
                        <td className="px-5 py-3 font-medium text-white">{row.name}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-white/8 text-gray-400">{row.category}</span>
                        </td>
                        <td className="px-4 py-3 text-right text-amber-400 font-semibold">{row.revenue}</td>
                        <td className="px-4 py-3 text-right text-gray-300">{row.orders}</td>
                        <td className="px-5 py-3 text-right">
                          <span className={`font-medium ${row.trend === 'up' ? 'text-emerald-400' : row.trend === 'down' ? 'text-red-400' : 'text-gray-400'}`}>
                            {row.conv}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-3 border-t border-white/8 flex items-center justify-between text-xs text-gray-600">
                <span>Showing 6 of 24 products</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded border border-white/8 hover:text-white transition-colors">Prev</button>
                  <button className="px-3 py-1 rounded border border-white/8 hover:text-white transition-colors">Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="border-t border-white/8 py-3 px-6 text-center text-xs text-gray-700 flex-shrink-0">
        Concept project by{' '}
        <Link href="/" className="text-gold-400 hover:text-gold-300 font-semibold">Aureus Labs</Link>
        {' '}— fictional product, illustrative data only.
      </div>
    </div>
  );
}
