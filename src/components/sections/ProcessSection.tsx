import { Search, Palette, Code, Zap } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover & Define',
    description: 'We dive deep into understanding your vision, goals, and target audience. Through research and workshops, we define the product scope and success metrics.',
    color: 'bg-blue-500',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design & Validate',
    description: 'Our designers create intuitive interfaces and prototypes. We validate designs with real users to ensure the best possible experience before development.',
    color: 'bg-purple-500',
  },
  {
    icon: Code,
    number: '03',
    title: 'Build & Launch',
    description: 'Using agile methodologies, we develop your product in iterative sprints. Regular demos and feedback loops ensure alignment with your vision.',
    color: 'bg-accent',
  },
  {
    icon: Zap,
    number: '04',
    title: 'Scale & Support',
    description: 'Post-launch, we monitor performance, gather insights, and continuously improve. We provide ongoing support to help your product grow.',
    color: 'bg-green-500',
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            How We Bring Your{' '}
            <span className="text-gradient">Vision to Life</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven four-stage methodology ensures every project is delivered 
            with precision, transparency, and exceptional quality.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-accent to-green-500 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50 hover:border-accent/30 transition-all hover:shadow-medium">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-accent/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 z-10">
                    <div className="w-full h-full rounded-full bg-card border-2 border-accent/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
