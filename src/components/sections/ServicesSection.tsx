import { 
  Globe, 
  Code, 
  Building2, 
  TrendingUp, 
  Megaphone,
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    number: '1️⃣',
    title: 'Digital Presence & Brand Foundations',
    subtitle: 'How your business shows up online',
    features: [
      'Corporate & Informational Websites',
      'CMS-Based Websites',
      'Landing Pages & Campaign Websites',
      'E-commerce Websites',
      'Content & Performance-Optimized Web Experiences'
    ],
    outcome: 'Credible digital presence that attracts, informs, and converts.',
  },
  {
    icon: Code,
    number: '2️⃣',
    title: 'Product & Experience Development',
    subtitle: 'How users interact with your business',
    features: [
      'Web Applications',
      'Mobile App Development (iOS, Android, Hybrid)',
      'Customer & Partner Portals',
      'Dashboards & Interactive Interfaces',
      'UX/UI Design & Product Engineering'
    ],
    outcome: 'Scalable digital products built for real users and real workflows.',
  },
  {
    icon: Building2,
    number: '3️⃣',
    title: 'Business & Operational Systems',
    subtitle: 'How your business actually runs',
    features: [
      'Enterprise Resource Planning (ERP) Systems',
      'Hospital Management Systems (HMS)',
      'Learning Management Systems (LMS)',
      'Management Information Systems (MIS)',
      'Restaurant Management Systems',
      'Alumni & Community Portals',
      'Internal Tools & Admin Panels'
    ],
    outcome: 'Digitized operations, improved efficiency, and centralized control.',
  },
  {
    icon: TrendingUp,
    number: '4️⃣',
    title: 'Sales, CRM & Revenue Systems',
    subtitle: 'How you acquire, manage, and grow customers',
    features: [
      'Custom CRM Development',
      'Salesforce Consulting & Implementation',
      'HubSpot Development & Automation',
      'Lead & Pipeline Management Systems',
      'Sales Dashboards & Analytics',
      'Workflow & Process Automation'
    ],
    outcome: 'Clear visibility into sales, stronger customer relationships, and scalable growth.',
  },
  {
    icon: Megaphone,
    number: '5️⃣',
    title: 'Digital Marketing & Growth Engine',
    subtitle: 'How demand is created and amplified',
    features: [
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Performance Marketing (PPC)',
      'Social Media Marketing',
      'Email Marketing & Campaign Automation',
      'Affiliate & Viral Marketing'
    ],
    outcome: 'Consistent lead generation powered by data and automation.',
  },
  {
    icon: Sparkles,
    number: '6️⃣',
    title: 'AI, Automation & Intelligent Systems',
    subtitle: 'How businesses scale smarter',
    features: [
      'AI Agents & Chatbots',
      'AI-Powered Workflow Automation',
      'Predictive Analytics & Decision Systems',
      'Custom Integrations & APIs',
      'Intelligent Dashboards & Reporting'
    ],
    outcome: 'Reduced manual effort, faster decisions, and future-ready systems.',
  },
  {
    icon: Compass,
    number: '7️⃣',
    title: 'Software Consulting & Technology Advisory',
    subtitle: 'How the right decisions are made early',
    features: [
      'Product & System Architecture',
      'Technology Stack Advisory',
      'Digital Transformation Consulting',
      'Scalability & Optimization Planning'
    ],
    outcome: 'Clear direction, reduced risk, and long-term technical stability.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Solutions for{' '}
            <span className="text-gradient">Digital Success</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer end-to-end services to take your product from concept to market 
            and beyond, ensuring every stage is handled with expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-soft card-hover border border-transparent hover:border-accent/20 h-full flex flex-col"
            >
              {/* Number and Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{service.number}</span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground/80 italic mb-4">
                {service.subtitle}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Outcome */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">Outcome:</p>
                <p className="text-sm text-muted-foreground">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
