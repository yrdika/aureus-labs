import { Navbar } from '~/components/layout/Navbar';
import { Footer } from '~/components/layout/Footer';
import { Hero } from '~/components/sections/Hero';
import { Services } from '~/components/sections/Services';
import { SelectedWork } from '~/components/sections/SelectedWork';
import { Process } from '~/components/sections/Process';
import { WhyAureus } from '~/components/sections/WhyAureus';
import { FAQSection } from '~/components/sections/FAQSection';
import { ContactCTA } from '~/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SelectedWork />
      <Process />
      <WhyAureus />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </>
  );
}
