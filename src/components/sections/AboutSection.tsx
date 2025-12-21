import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We focus on delivering measurable results that align with your business goals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies to build future-proof solutions.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work as an extension of your team, ensuring transparent communication.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description: 'We build scalable architectures that grow with your business.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Alchemist Labs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Transforming Ideas Into{' '}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We craft scalable digital products with a strategic, data-driven approach 
              combining design, engineering, and business insight. Our team of experts 
              brings years of experience in building products that users love and 
              businesses rely on.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From early-stage startups to established enterprises, we partner with 
              visionary founders and teams to transform their ideas into market-ready 
              products. Our holistic approach ensures every aspect of your product—from 
              strategy to execution—is optimized for success.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                    <span className="text-5xl font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Alchemist Labs</h3>
                  <p className="text-primary-foreground/80">
                    Turning vision into value
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
