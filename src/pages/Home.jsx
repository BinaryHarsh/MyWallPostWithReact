import HeroSection from '../components/HeroSection/HeroSection.jsx';

import PhilosophySection from '../components/PhilosophySection/PhilosophySection.jsx';
import ServicesSection from '../components/ServicesSection/ServicesSection.jsx';
import StatsSection from '../components/StatsSection/StatsSection.jsx';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs.jsx';
import ProcessSection from '../components/ProcessSection/ProcessSection.jsx';
import TeamSection from '../components/TeamSection/TeamSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection.jsx';

function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
export default Home;
