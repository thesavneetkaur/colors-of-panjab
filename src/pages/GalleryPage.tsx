import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroBhangra from "@/assets/hero-bhangra.jpg";

const categories = ["All", "Practice", "Performances", "Competitions", "Events"];

const galleryItems = [
  { id: 1, image: gallery1, category: "Practice", title: "Adult Bhangra Class" },
  { id: 2, image: gallery2, category: "Practice", title: "Kids Bhangra Session" },
  { id: 3, image: gallery3, category: "Competitions", title: "Regional Championship 2024" },
  { id: 4, image: gallery4, category: "Events", title: "Wedding Sangeet Performance" },
  { id: 5, image: heroBhangra, category: "Performances", title: "Annual Showcase" },
  { id: 6, image: gallery1, category: "Practice", title: "Evening Rehearsal" },
  { id: 7, image: gallery3, category: "Performances", title: "Cultural Festival" },
  { id: 8, image: gallery4, category: "Events", title: "Corporate Event" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Gallery</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the energy, joy, and cultural richness of our Bhangra 
            community through our photo gallery.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-accent font-medium">{item.category}</span>
                  <h3 className="text-primary-foreground font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <span className="text-accent text-sm font-medium">{selectedImage.category}</span>
              <h3 className="text-primary-foreground text-xl font-display font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Be Part of This</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and create your own memorable moments on and off the stage.
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

export default GalleryPage;
