import type { Metadata } from 'next';
import { AnalyticsDashboard } from '~/components/demos/AnalyticsDashboard';
import { id } from '~/lib/i18n/messages/id';

export const metadata: Metadata = {
  title: { absolute: id.meta.dashboard.title },
  description: id.meta.dashboard.description,
};

export default function AnalyticsDashboardPage() {
  return <AnalyticsDashboard />;
}
