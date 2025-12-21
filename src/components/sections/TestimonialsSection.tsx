import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Alchemist Labs delivered exceptional product insights and execution for our project. Their strategic approach and technical expertise transformed our vision into a market-ready solution.",
    author: "Director",
    company: "Pace Marine Solutions",
    location: "Navi Mumbai",
    rating: 5,
  },
  {
    quote: "Working with the Alchemist Labs team was a game-changer for our startup. They understood our needs perfectly and delivered a product that exceeded our expectations.",
    author: "Founder & CEO",
    company: "TechStart Innovations",
    location: "Mumbai",
    rating: 5,
  },
  {
    quote: "The team's ability to translate complex requirements into elegant solutions is remarkable. They're not just developers—they're true product partners.",
    author: "Product Manager",
    company: "FinServe Solutions",
    location: "Bangalore",
    rating: 5,
  },
];

const clientLogos = [
  'Pace Marine',
  'TechStart',
  'FinServe',
  'HealthPlus',
  'RetailMax',
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Alchemist Labs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-xl font-bold text-muted-foreground/40 hover:text-accent transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
