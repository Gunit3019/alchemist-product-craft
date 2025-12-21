import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alchemist Labs | Product Consulting & Software Development</title>
        <meta 
          name="description" 
          content="End-to-end product consulting and software development for startups and growing businesses. From idea to scalable product — we build and launch." 
        />
        <meta name="keywords" content="product consulting, software development, MVP development, web development, mobile app development, startup consulting" />
        <link rel="canonical" href="https://alchemistlabs.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialsSection />
          <WhyUsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
