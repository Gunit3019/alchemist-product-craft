import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Pace Marine Solutions',
    category: 'Maritime Technology',
    description: 'End-to-end product development for a marine services company, including fleet management and logistics optimization.',
    tags: ['React', 'Node.js', 'Real-time Tracking'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'FinTech Dashboard',
    category: 'Financial Services',
    description: 'A comprehensive analytics dashboard for financial data visualization with real-time updates and insights.',
    tags: ['Next.js', 'TypeScript', 'Data Visualization'],
    color: 'from-purple-600 to-pink-500',
  },
  {
    title: 'HealthCare Platform',
    category: 'Healthcare',
    description: 'Telemedicine platform connecting patients with healthcare providers, featuring video consultations and health records.',
    tags: ['Flutter', 'Firebase', 'WebRTC'],
    color: 'from-green-600 to-teal-500',
  },
  {
    title: 'E-Commerce Solution',
    category: 'Retail',
    description: 'Scalable e-commerce platform with inventory management, payment processing, and analytics.',
    tags: ['React', 'Stripe', 'PostgreSQL'],
    color: 'from-orange-600 to-amber-500',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Explore some of our recent work. Each project represents our commitment 
            to delivering exceptional digital products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:border-accent/30 transition-all card-hover"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-end`}>
                <span className="text-sm font-medium text-white/80 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/70 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
