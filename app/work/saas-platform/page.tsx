import type { Metadata } from 'next';
import { SaasPlatform } from '~/components/demos/SaasPlatform';
import { id } from '~/lib/i18n/messages/id';

export const metadata: Metadata = {
  title: { absolute: id.meta.saas.title },
  description: id.meta.saas.description,
};

export default function SaaSPage() {
  return <SaasPlatform />;
}
