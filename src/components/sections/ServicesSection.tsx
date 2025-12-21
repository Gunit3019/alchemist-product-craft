import { 
  Compass, 
  Rocket, 
  Smartphone, 
  Plug, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Compass,
    title: 'Product Strategy & Consulting',
    description: 'We help you define your product vision, validate market fit, and create a roadmap for success. Our strategic approach ensures your product solves real problems.',
    features: ['Market Research', 'Product Roadmapping', 'Competitive Analysis', 'Go-to-Market Strategy'],
  },
  {
    icon: Rocket,
    title: 'MVP & Full-Scale Product Development',
    description: 'From rapid prototypes to fully-featured products, we build solutions that scale. Our agile methodology ensures quick iterations and continuous improvement.',
    features: ['Rapid Prototyping', 'Agile Development', 'Quality Assurance', 'Continuous Deployment'],
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Application Development',
    description: 'We create responsive web applications and native mobile apps that deliver exceptional user experiences across all devices and platforms.',
    features: ['React & Next.js', 'Flutter & React Native', 'Progressive Web Apps', 'Cross-Platform Solutions'],
  },
  {
    icon: Plug,
    title: 'API Integrations & Automation',
    description: 'Connect your systems, automate workflows, and build robust integrations that streamline operations and enhance productivity.',
    features: ['Third-Party APIs', 'Custom Integrations', 'Workflow Automation', 'Data Synchronization'],
  },
  {
    icon: TrendingUp,
    title: 'Product Scaling & Maintenance',
    description: 'We help you scale your product infrastructure, optimize performance, and provide ongoing support to ensure long-term success.',
    features: ['Performance Optimization', 'Infrastructure Scaling', '24/7 Support', 'Regular Updates'],
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
              className={`group bg-card rounded-2xl p-6 lg:p-8 shadow-soft card-hover border border-transparent hover:border-accent/20 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
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
