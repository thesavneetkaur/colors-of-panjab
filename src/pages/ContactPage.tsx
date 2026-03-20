import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Contact Us</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's start 
            your Bhangra journey together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-section mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have questions about our classes, want to schedule a 
                trial session, or are interested in booking us for an event, we're 
                here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+16477877475" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (647) 787-7475
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-secondary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/16477877475" className="text-muted-foreground hover:text-secondary transition-colors">
                      +1 (647) 787-7475
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:colorsofpanjab@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                      colorsofpanjab@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Studio Address</h3>
                    <p className="text-muted-foreground">
                      2909 Ellerslie Road SW<br />
                      Edmonton, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-secondary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Studio Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 4:00 PM - 9:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-cultural p-8">
                <h2 className="font-display text-2xl font-semibold mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-secondary" size={28} />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Link to="/register" className="btn-primary inline-flex items-center gap-2">
                      Register for Classes
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      >
                        <option value="">Select a topic...</option>
                        <option value="classes">Class Information</option>
                        <option value="registration">Registration Help</option>
                        <option value="private">Private Lessons</option>
                        <option value="events">Event Booking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Quick CTA */}
              <div className="mt-6 p-6 bg-muted rounded-xl text-center">
                <p className="text-muted-foreground mb-4">
                  Ready to join? Skip the wait and register directly!
                </p>
                <Link to="/register" className="btn-primary inline-flex items-center gap-2">
                  Register Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
