import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Crown, Sparkles, Calendar, Users } from "lucide-react";

const services = [
  {
    title: "Wedding Pagg Styling",
    description: "Elegant turban styling for grooms and wedding party members. Traditional and modern styles available.",
    icon: Crown,
  },
  {
    title: "Event & Photoshoot",
    description: "Professional Pagg tying for cultural events, photoshoots, and special occasions.",
    icon: Sparkles,
  },
  {
    title: "Group Bookings",
    description: "On-location service for wedding parties, dance teams, and cultural group events.",
    icon: Users,
  },
  {
    title: "Flexible Scheduling",
    description: "Book at your convenience — we come to you for weddings and large events.",
    icon: Calendar,
  },
];

const PaggTyingPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Pagg Tying Service</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Professional turban (Pagg) tying for weddings, events, photoshoots, and 
            cultural celebrations. Traditional artistry meets modern styling.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="heading-section text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="card-cultural flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center max-w-2xl">
          <h2 className="heading-section mb-4">Book Your Pagg Styling</h2>
          <p className="text-body-lg text-muted-foreground mb-8">
            Contact us to discuss your requirements and schedule a session. 
            We offer on-location service for weddings and large events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+16477877475" className="btn-secondary flex items-center gap-2">
              <Phone size={18} />
              Call Us
            </a>
            <a href="https://wa.me/16477877475" className="btn-primary flex items-center gap-2">
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
          <div className="mt-6">
            <Link to="/contact" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 transition-colors">
              Or send us a message
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaggTyingPage;
