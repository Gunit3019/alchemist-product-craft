import { useEffect, useState } from 'react';
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
  {
    name: 'Darshan Dental Group of Hospitals',
    logo: '/logos/darshan-dental.png',
  },
  {
    name: 'Wonder Cement',
    logo: '/logos/wonder-cement.png',
  },
  {
    name: 'Infosys',
    logo: '/logos/infosys.png',
  },
  {
    name: 'Pacific College Udaipur',
    logo: '/logos/pacific-college.png',
  },
  {
    name: 'Pace Marine Solutions',
    logo: '/logos/pace-marine.png',
  },
];

export const TestimonialsSection = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Simple auto-play carousel for client logos
  useEffect(() => {
    if (clientLogos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % clientLogos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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

        {/* Client Logos Carousel */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-6">
            Trusted by forward-thinking teams
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Slides */}
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentLogoIndex * 100}%)` }}
              >
                {clientLogos.map((client, index) => (
                  <div
                    key={index}
                    className="min-w-full flex items-center justify-center px-8 py-6 sm:py-8"
                  >
                    <div className="flex flex-col items-center gap-3 sm:gap-4">
                      <div className="h-10 sm:h-14 md:h-16 flex items-center">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground/70 text-center max-w-xs">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {clientLogos.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to logo ${index + 1}`}
                  onClick={() => setCurrentLogoIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentLogoIndex
                      ? 'bg-accent w-5'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* Note: Place logo image files under /public/logos with the names used above */}
          </div>
        </div>
      </div>
    </section>
  );
};
