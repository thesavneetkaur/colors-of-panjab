import { Link } from "react-router-dom";
import { ArrowRight, Users, Trophy, Heart, Star } from "lucide-react";
import heroBhangra from "@/assets/hero-bhangra.jpg";

const testimonials = [
  {
    name: "Priya Singh",
    role: "Student, 2 years",
    quote: "Colors of Panjab transformed my connection to my culture. The instructors are incredible!",
    rating: 5,
  },
  {
    name: "Rajveer Gill",
    role: "Parent",
    quote: "My children love coming here. They've learned so much about our heritage through dance.",
    rating: 5,
  },
  {
    name: "Amandeep Kaur",
    role: "Competition Team",
    quote: "Training here prepared me for national competitions. The discipline and passion are unmatched.",
    rating: 5,
  },
];

const highlights = [
  {
    icon: Users,
    title: "All Skill Levels",
    description: "Beginner, Intermediate, and Advanced classes for every dancer",
  },
  {
    icon: Trophy,
    title: "Award-Winning Team",
    description: "Our competition team has won numerous regional and national titles",
  },
  {
    icon: Heart,
    title: "Cultural Connection",
    description: "Learn more than dance – immerse yourself in Punjabi traditions",
  },
];

const whyChooseUs = [
  "Experienced instructors with professional performance backgrounds",
  "Small class sizes for personalized attention",
  "Flexible scheduling for busy families and professionals",
  "Regular performance opportunities and competitions",
  "Welcoming community that feels like family",
  "Kids, teens, and adult programs available",
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBhangra})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="relative container-custom mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium mb-6">
              Punjab's Premier Bhangra Academy
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Learn Bhangra.
              <br />
              <span className="text-accent">Live the Culture.</span>
            </h1>
            <p className="text-body-lg text-primary-foreground/90 mb-8 max-w-lg">
              Discover the joy of Bhangra at Colors of Panjab. Our expert instructors 
              will guide you through the vibrant rhythms and movements of Punjab's 
              most celebrated folk dance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-accent flex items-center gap-2">
                Register Now
                <ArrowRight size={18} />
              </Link>
              <Link to="/classes" className="btn-secondary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                View Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-cultural text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="section-padding gradient-peacock text-primary-foreground">
        <div className="container-custom mx-auto">
          <h2 className="heading-section text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Why Colors of Panjab?</span>
              <h2 className="heading-section mb-6">
                More Than Just a Dance Academy
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8">
                We're a community dedicated to preserving and sharing the rich cultural 
                heritage of Punjab through the energetic art of Bhangra.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-foreground/80">{reason}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className="btn-primary inline-flex items-center gap-2 mt-8"
              >
                Join Our Academy
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={heroBhangra}
                  alt="Bhangra performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-medium">
                <p className="font-display text-3xl font-bold">500+</p>
                <p className="text-sm">Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Ready to Start Dancing?</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Colors of Panjab today and begin your journey into the vibrant world 
            of Bhangra. All skill levels welcome!
          </p>
          <Link to="/register" className="btn-primary inline-flex items-center gap-2">
            Register Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
