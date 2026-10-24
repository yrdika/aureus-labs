import type { Metadata } from 'next';
import { PageMeta } from '~/components/PageMeta';
import { Footer } from '~/components/layout/Footer';
import { Navbar } from '~/components/layout/Navbar';
import { WorkGallery } from '~/components/sections/WorkGallery';
import { SkipLink } from '~/components/ui/SkipLink';
import { id } from '~/lib/i18n/messages/id';

export const metadata: Metadata = {
  title: { absolute: id.meta.work.title },
  description: id.meta.work.description,
};

export default function WorkPage() {
  return (
    <>
      <PageMeta page="work" />
      <SkipLink />
      <Navbar />
      <main id="main" className="relative z-10 pb-28 pt-36 md:pt-44">
        <WorkGallery />
      </main>
      <Footer />
    </>
  );
}
