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
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all group-hover:scale-110 group-hover:shadow-lg shadow-accent/20">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground/70 italic mb-5">
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
              <div className="mt-auto pt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Outcome</p>
                <p className="text-sm text-foreground/90 leading-relaxed">{service.outcome}</p>
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
