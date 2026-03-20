import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Singh",
    role: "Adult Student, 2 years",
    quote: "Colors of Panjab transformed my connection to my culture. The instructors are incredibly patient and passionate. I came in knowing nothing about Bhangra and now I perform at events!",
    rating: 5,
  },
  {
    name: "Rajveer Gill",
    role: "Parent of 2 students",
    quote: "My children absolutely love coming to class. They've learned so much about our heritage through dance. The kids program is perfectly designed to keep them engaged while teaching authentic Bhangra.",
    rating: 5,
  },
  {
    name: "Amandeep Kaur",
    role: "Competition Team, 3 years",
    quote: "Training here prepared me for national competitions. The discipline, technique, and passion that the coaches instill are unmatched. I've grown not just as a dancer but as a person.",
    rating: 5,
  },
  {
    name: "Jaspreet Dhillon",
    role: "Adult Beginner, 6 months",
    quote: "I was nervous to start at 35, thinking I'd be out of place. Instead, I found a welcoming community and instructors who meet you where you are. Best decision I've made!",
    rating: 5,
  },
  {
    name: "Harleen Sandhu",
    role: "Wedding Performance Client",
    quote: "We hired Colors of Panjab for our wedding sangeet and it was the highlight of the celebration. They choreographed a beautiful piece for our family and the performance left everyone in awe.",
    rating: 5,
  },
  {
    name: "Manpreet Brar",
    role: "Teen Student, 4 years",
    quote: "I started in the kids class and worked my way up to the competition team. The academy has been like a second family. They've taught me discipline, confidence, and pride in my roots.",
    rating: 5,
  },
  {
    name: "Simran Grewal",
    role: "Online Student",
    quote: "Living far from the studio, I wasn't sure online classes would work. But the live sessions are so engaging and the instructors give great feedback even through video. Highly recommend!",
    rating: 5,
  },
  {
    name: "Gurinder Johal",
    role: "Parent",
    quote: "As a parent, I appreciate how they emphasize cultural values alongside dance technique. My son not only learned Bhangra but also gained a deeper appreciation for his Punjabi identity.",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">What Our Students Say</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Hear from our community of dancers, parents, and clients about their 
            experience at Colors of Panjab.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-cultural flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <span className="text-primary font-medium mb-2 block">Coming Soon</span>
          <h2 className="heading-section mb-4">Video Testimonials</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're collecting video testimonials from our students. Check back soon 
            to see their stories in their own words!
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Start Your Journey Today</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of happy dancers and create your own success story.
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

export default TestimonialsPage;
