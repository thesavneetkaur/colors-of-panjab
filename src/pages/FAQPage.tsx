import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can complete beginners join?",
    answer: "Absolutely! Our beginner classes are designed specifically for those with no prior dance experience. We'll teach you everything from scratch, including basic footwork, rhythm awareness, and traditional movements. Many of our best dancers started as complete beginners.",
  },
  {
    question: "What are the age requirements?",
    answer: "We welcome students of all ages! Our Kids Bhangra class is for ages 5-12, Teen Bhangra for ages 13-17, and Adult classes are 18+. We also offer Family Bhangra sessions where parents and children can learn together. For our Competition Team, members must be at least 14 years old.",
  },
  {
    question: "What are the fees and payment options?",
    answer: "Our fees vary by class type. Monthly plans range from $50 (online) to $120 (intermediate adults). We offer discounts for quarterly (10% off) and annual (20% off) commitments. Family discounts are available for multiple enrollments. Payment can be made via credit card, bank transfer, or cash.",
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a free trial class for all new students. This allows you to experience our teaching style, meet the instructors, and see if Bhangra is right for you – with no obligation to enroll. Just contact us to schedule your trial.",
  },
  {
    question: "What should I wear to class?",
    answer: "For regular classes, wear comfortable workout clothes that allow free movement – athletic wear, leggings, or loose pants work great. Traditional outfits are not required for practice but are provided for performances. Bare feet or dance shoes (not sneakers) are preferred on our studio floor.",
  },
  {
    question: "How often are classes held?",
    answer: "Most classes meet 1-2 times per week, depending on the level. Beginners typically attend once or twice weekly, while our Competition Team practices 3-4 times per week. Check our Schedule page for specific class times.",
  },
  {
    question: "Do you perform at events?",
    answer: "Yes! We offer performance services for weddings, corporate events, cultural festivals, and private parties. We can provide fully choreographed performances or teach interactive sessions for your guests. Contact us for custom event packages.",
  },
  {
    question: "Can I join the Competition Team?",
    answer: "Our Competition Team is open to dedicated dancers who audition successfully. Auditions are held twice a year (usually January and August). Team members must commit to the full practice schedule and be available for competitions. Prior Bhangra experience is preferred but not required for auditions.",
  },
  {
    question: "What makes Colors of Panjab different?",
    answer: "We combine authentic traditional training with modern teaching methods. Our instructors are professional performers with years of experience. Beyond technique, we emphasize cultural education, community building, and creating a supportive environment where everyone feels welcome.",
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes! We offer live Zoom classes for those who can't attend in person, as well as an on-demand video library. Online students can participate in the same curriculum as studio students and receive personalized feedback during live sessions.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Frequently Asked Questions</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Find answers to common questions about our classes, enrollment, 
            and what to expect at Colors of Panjab.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-display text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 p-8 bg-muted rounded-xl text-center">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is happy to help.
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
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
