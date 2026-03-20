import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Calendar } from "lucide-react";

const classes = [
  {
    id: "kids-bhangra",
    title: "Kids Bhangra",
    ageGroup: "Ages 5-12",
    level: "All Levels",
    schedule: "Tue/Thu & Sat/Sun",
    duration: "60 minutes",
    description: "A fun-filled introduction to Bhangra for young dancers. We focus on basic steps, rhythm awareness, and cultural appreciation in a playful environment.",
    features: ["Age-appropriate choreography", "Games and activities", "Cultural stories", "10% sibling discount"],
    price: "$90/8 classes · $60/4 classes",
  },
  {
    id: "adult-bhangra",
    title: "Adult Bhangra",
    ageGroup: "Ages 16+",
    level: "All Levels",
    schedule: "Tue/Thu & Sat/Sun",
    duration: "60-75 minutes",
    description: "Perfect for beginners and intermediate dancers. Learn fundamental steps, formations, and develop your coordination in a supportive atmosphere.",
    features: ["Step-by-step instruction", "Cardio workout", "Group formations", "Performance opportunities"],
    price: "$90/8 classes · $70/4 classes",
  },
  {
    id: "wedding-choreography",
    title: "Wedding Choreography",
    ageGroup: "All Ages",
    level: "All Levels",
    schedule: "By appointment",
    duration: "Per session",
    description: "Learn a special Bhangra routine for your wedding, sangeet, or special event. Solo, duo, or group sessions available.",
    features: ["Custom choreography", "Flexible scheduling", "Song selection help", "Group coordination"],
    price: "$60/solo · $100/duo · $25 each (6+)",
  },
  {
    id: "pagg-tying",
    title: "Pagg Tying Service",
    ageGroup: "All Ages",
    level: "Service",
    schedule: "By appointment",
    duration: "Per session",
    description: "Professional Pagg (turban) tying service for weddings, events, photoshoots, and cultural celebrations. Expert styling with traditional and modern techniques.",
    features: ["Wedding & event styling", "Multiple turban styles", "On-location available", "Cultural celebrations"],
    price: "Contact for pricing",
  },
];

const ClassesPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Our Classes</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            From kids to adults, beginners to advanced dancers – we have the perfect 
            Bhangra class for you. Find your rhythm and join our community.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className="card-cultural flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {classItem.level}
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                    {classItem.ageGroup}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold mb-3">
                  {classItem.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {classItem.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar size={16} />
                    <span>{classItem.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock size={16} />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users size={16} />
                    <span>{classItem.ageGroup}</span>
                  </div>
                </div>

                <ul className="mb-6 space-y-1">
                  {classItem.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-display text-xl font-semibold text-primary">
                    {classItem.price}
                  </span>
                  <Link
                    to={`/register?class=${classItem.id}`}
                    className="btn-primary py-2 flex items-center gap-2"
                  >
                    Enroll
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Not Sure Which Class is Right for You?</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and we'll help you find the perfect fit 
            based on your experience level and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/register" className="btn-primary flex items-center gap-2">
              Register Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassesPage;
