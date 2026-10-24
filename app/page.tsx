import { PageMeta } from '~/components/PageMeta';
import { Footer } from '~/components/layout/Footer';
import { Navbar } from '~/components/layout/Navbar';
import { Audience } from '~/components/sections/Audience';
import { ContactSection } from '~/components/sections/ContactSection';
import { FAQSection } from '~/components/sections/FAQSection';
import { Hero } from '~/components/sections/Hero';
import { Process } from '~/components/sections/Process';
import { SelectedWork } from '~/components/sections/SelectedWork';
import { Services } from '~/components/sections/Services';
import { WhyAureus } from '~/components/sections/WhyAureus';
import { SkipLink } from '~/components/ui/SkipLink';

export default function HomePage() {
  return (
    <>
      <PageMeta page="home" />
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Audience />
        <SelectedWork />
        <Process />
        <WhyAureus />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
