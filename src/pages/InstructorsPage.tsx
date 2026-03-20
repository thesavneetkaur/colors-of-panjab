import { Link } from "react-router-dom";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const instructors = [
  {
    name: "Harpreet Singh Gill",
    title: "Founder & Head Instructor",
    image: instructor1,
    experience: "15+ years",
    specializations: ["Traditional Bhangra", "Competition Choreography", "Folk Forms"],
    bio: "Harpreet founded Colors of Panjab with a vision to share the rich cultural heritage of Punjab. A former national champion, he has performed at prestigious events worldwide and trained hundreds of students in the art of Bhangra.",
    philosophy: "Every step tells a story of Punjab. My goal is to help students not just learn the moves, but feel the culture in their hearts.",
  },
  {
    name: "Simran Kaur",
    title: "Senior Instructor",
    image: instructor2,
    experience: "10+ years",
    specializations: ["Giddha", "Women's Bhangra", "Kids Programs"],
    bio: "Simran brings grace and energy to every class. Trained in both Bhangra and classical Indian dance, she specializes in Giddha and has developed our acclaimed kids program that makes learning fun while honoring tradition.",
    philosophy: "Dance is the language of joy. I love watching students discover confidence and community through movement.",
  },
  {
    name: "Jasdeep Singh",
    title: "Competition Team Coach",
    image: instructor3,
    experience: "8+ years",
    specializations: ["Competition Training", "Advanced Technique", "Team Choreography"],
    bio: "Jasdeep leads our award-winning competition team. His dynamic teaching style and innovative choreography have helped students win at regional and national levels. He's known for pushing boundaries while respecting tradition.",
    philosophy: "Excellence comes from discipline and passion. When you commit fully, there's no limit to what you can achieve.",
  },
];

const InstructorsPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Our Instructors</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Learn from passionate, experienced dancers who are dedicated to 
            preserving and sharing the art of Bhangra.
          </p>
        </div>
      </section>

      {/* Instructors */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-16">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full max-w-md mx-auto rounded-2xl shadow-medium object-cover aspect-[3/4]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-2 text-accent">
                        <Award size={18} />
                        <span className="font-medium">{instructor.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <span className="text-primary font-medium mb-2 block">
                    {instructor.title}
                  </span>
                  <h2 className="heading-section mb-4">{instructor.name}</h2>
                  <p className="text-muted-foreground mb-6">{instructor.bio}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-accent flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold mb-1">Teaching Philosophy</h4>
                        <p className="text-muted-foreground italic">"{instructor.philosophy}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Ready to Learn from the Best?</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our classes and experience the joy of Bhangra with our expert instructors.
          </p>
          <Link to="/register" className="btn-primary inline-flex items-center gap-2">
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;
