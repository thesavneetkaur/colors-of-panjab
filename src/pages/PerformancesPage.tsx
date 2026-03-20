import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Medal, Star, Users } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroBhangra from "@/assets/hero-bhangra.jpg";

const achievements = [
  {
    title: "National Bhangra Championship",
    year: "2024",
    position: "1st Place",
    description: "Our competition team took home the gold at the prestigious National Bhangra Championship.",
  },
  {
    title: "Regional Dance Festival",
    year: "2024",
    position: "Best Cultural Performance",
    description: "Recognized for authentic representation of Punjabi folk traditions.",
  },
  {
    title: "Inter-Collegiate Bhangra",
    year: "2023",
    position: "2nd Place",
    description: "Our young team made an impressive showing against university-level competition.",
  },
  {
    title: "Cultural Heritage Awards",
    year: "2023",
    position: "Community Impact Award",
    description: "Honored for our dedication to preserving and teaching Punjabi culture.",
  },
];

const performances = [
  {
    event: "Vaisakhi Festival Main Stage",
    venue: "City Center Plaza",
    image: heroBhangra,
    description: "Annual performance celebrating Punjabi New Year with the community.",
  },
  {
    event: "Corporate Gala Performance",
    venue: "Grand Hotel Ballroom",
    image: gallery3,
    description: "Private performance for Fortune 500 company celebrating diversity.",
  },
  {
    event: "Wedding Sangeet Show",
    venue: "Various Venues",
    image: gallery4,
    description: "Beautiful choreographed performances for wedding celebrations.",
  },
];

const PerformancesPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Performances & Achievements</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Celebrating our journey of excellence, cultural preservation, 
            and the victories of our dedicated students.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Trophy className="text-accent" size={32} />
              </div>
              <p className="font-display text-3xl font-bold text-primary">25+</p>
              <p className="text-muted-foreground">Competition Wins</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Star className="text-accent" size={32} />
              </div>
              <p className="font-display text-3xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground">Performances</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Users className="text-accent" size={32} />
              </div>
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Medal className="text-accent" size={32} />
              </div>
              <p className="font-display text-3xl font-bold text-primary">10</p>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">Our Victories</span>
            <h2 className="heading-section">Competition Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-cultural flex gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-accent" size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                      {achievement.year}
                    </span>
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded">
                      {achievement.position}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Performances */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium mb-2 block">On Stage</span>
            <h2 className="heading-section">Featured Performances</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {performances.map((performance, index) => (
              <div key={index} className="card-cultural overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={performance.image}
                    alt={performance.event}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {performance.event}
                  </h3>
                  <p className="text-sm text-primary mb-2">{performance.venue}</p>
                  <p className="text-muted-foreground text-sm">{performance.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block">Success Stories</span>
              <h2 className="heading-section mb-6">
                From Our Studio to the Stage
              </h2>
              <p className="text-muted-foreground mb-6">
                Our students have gone on to perform at major cultural festivals, 
                compete at national levels, and even join professional dance troupes. 
                Their success is our greatest achievement.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-xl">
                  <p className="italic text-muted-foreground mb-2">
                    "Starting at Colors of Panjab changed my life. Three years later, 
                    I'm now a competition team captain and have performed at events 
                    I never dreamed of."
                  </p>
                  <p className="font-semibold">— Navdeep K., Student since 2021</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="italic text-muted-foreground mb-2">
                    "My daughter joined at age 7 and has grown into a confident, 
                    culturally connected young woman. The academy is like family."
                  </p>
                  <p className="font-semibold">— Gurpreet S., Parent</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={gallery3}
                alt="Performance"
                className="rounded-2xl shadow-medium w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-medium">
                <p className="font-display text-2xl font-bold">Train with Us</p>
                <p className="text-sm text-primary-foreground/80">Be the next success story</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-peacock text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Ready to Join Our Winning Team?</h2>
          <p className="text-body-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you dream of competing or just want to dance for joy, 
            your journey starts here.
          </p>
          <Link to="/register" className="btn-accent inline-flex items-center gap-2">
            Start Training Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PerformancesPage;
