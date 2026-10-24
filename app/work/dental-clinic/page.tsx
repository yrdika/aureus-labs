import type { Metadata } from 'next';
import { DentalClinic } from '~/components/demos/DentalClinic';
import { id } from '~/lib/i18n/messages/id';

export const metadata: Metadata = {
  title: { absolute: id.meta.dental.title },
  description: id.meta.dental.description,
};

export default function DentalClinicPage() {
  return <DentalClinic />;
}
