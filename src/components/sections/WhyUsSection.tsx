import { 
  Shield, 
  Code2, 
  DollarSign, 
  Zap, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Secure & Scalable Architectures',
    description: 'We build with security-first principles and design for scale from day one.',
  },
  {
    icon: Code2,
    title: 'Modern Tech Stacks',
    description: 'React, Next.js, Flutter, Node.js, and more. We use the best tools for the job.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing & Delivery',
    description: 'No hidden costs, no surprises. Clear milestones and regular progress updates.',
  },
  {
    icon: Zap,
    title: 'Fast Execution & Communication',
    description: 'Agile development with quick iterations. We keep you in the loop at every step.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Support',
    description: 'We don\'t disappear after launch. Ongoing maintenance and support packages available.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven Track Record',
    description: '50+ projects delivered successfully across various industries and scales.',
  },
];

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-accent/10 rounded-2xl p-6 h-40 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-accent" />
                </div>
                <div className="bg-primary rounded-2xl p-6 h-48 flex flex-col justify-center text-primary-foreground">
                  <span className="text-4xl font-bold">98%</span>
                  <span className="text-sm text-primary-foreground/80">Client Satisfaction</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-2xl p-6 h-48 flex flex-col justify-center">
                  <span className="text-4xl font-bold text-foreground">50+</span>
                  <span className="text-sm text-muted-foreground">Projects Delivered</span>
                </div>
                <div className="bg-accent rounded-2xl p-6 h-40 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-accent-foreground" />
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Success Is Our{' '}
              <span className="text-gradient">Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine technical excellence with business acumen to deliver 
              products that not only work flawlessly but also drive real results.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
