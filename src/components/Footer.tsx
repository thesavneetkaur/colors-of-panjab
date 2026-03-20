import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Colors of Panjab" className="h-12 w-auto brightness-0 invert" />
              <span className="font-display text-xl font-bold">Colors of Panjab</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Preserving and celebrating Punjabi culture through the art of Bhangra. 
              Join us to learn, dance, and connect with your roots.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/classes" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Our Classes
              </Link>
              <Link to="/schedule" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Schedule
              </Link>
              <Link to="/services/pagg-tying" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Pagg Tying
              </Link>
              <Link to="/gallery" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+16477877475" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone size={18} />
                <span>+1 (647) 787-7475</span>
              </a>
              <a href="mailto:colorsofpanjab@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail size={18} />
                <span>colorsofpanjab@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>2909 Ellerslie Road SW, Edmonton, Canada</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Start Your Journey</h4>
            <p className="text-primary-foreground/80">
              Ready to learn Bhangra and embrace the vibrant Punjabi culture?
            </p>
            <Link to="/register" className="btn-accent inline-block">
              Register Now
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Colors of Panjab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
