import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, MessageCircle, CheckCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const classes = [
  { id: "kids-bhangra", name: "Kids Bhangra" },
  { id: "adult-bhangra", name: "Adult Bhangra" },
  { id: "competition-team", name: "Competitive Team" },
  { id: "wedding-performance", name: "Wedding / Performance Training" },
];

const batches = [
  "Tue/Thu — Kids 5:00–6:00 PM",
  "Tue/Thu — Adults 7:00–8:00 PM",
  "Sat/Sun — Kids 4:00–5:00 PM",
  "Sat/Sun — Adults 6:30–7:30 PM",
  "Giddha — 5:30–6:30 PM",
  "Workout — 6:00–7:00 PM",
  "Flexible / Contact Us",
];

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const guidelines = [
  "Bhangra is a physical dance activity. By registering, the participant confirms that they are physically fit to participate.",
  "Colors of Panjab academy will not be responsible for any injuries that may occur during training, practice, or performances.",
  "Students are responsible for informing instructors about any medical conditions or physical limitations before participating.",
  "Once fees are paid, the academy will reserve the seat in the selected batch.",
  "If a student is absent from classes, it is the student's responsibility and fees will not be refunded for missed classes.",
  "Fees once paid are generally non-refundable unless the academy cancels the program.",
  "Students must maintain discipline, respect instructors, and follow academy guidelines during classes and performances.",
  "Participation in performances or competitions may require additional practice and commitment.",
];

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedClass = searchParams.get("class") || "";

  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    selectedClass: preselectedClass,
    preferredBatch: "",
    experienceLevel: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center section-padding">
        <div className="text-center max-w-lg mx-auto animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-secondary" />
          </div>
          <h1 className="heading-section mb-4">Registration Submitted!</h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            Thank you for registering with Colors of Panjab. We'll contact you
            within 24 hours to confirm your enrollment and provide next steps.
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
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Register Now</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step on your Bhangra journey. Review the guidelines
            below, then complete your registration.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto max-w-2xl">
          {/* Step 1 — Guidelines */}
          <div className="card-cultural p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <ShieldCheck size={22} className="text-accent" />
              </div>
              <h2 className="text-xl font-semibold font-heading text-foreground">
                Participation Guidelines &amp; Safety Agreement
              </h2>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-6 space-y-4">
              <div className="flex items-start gap-2 text-sm text-accent font-medium mb-2">
                <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                <span>Please read all guidelines carefully before proceeding.</span>
              </div>
              <ol className="space-y-3">
                {guidelines.map((g, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Step 2 — Acceptance */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-lg border border-border bg-muted/50">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label
                htmlFor="agree"
                className="text-sm font-medium leading-relaxed cursor-pointer select-none"
              >
                I have read and agree to the participation guidelines and academy
                policies.
              </label>
            </div>
          </div>

          {/* Step 3 — Registration Form */}
          <div
            className={`card-cultural p-8 transition-opacity duration-300 ${
              agreed ? "opacity-100" : "opacity-50 pointer-events-none"
            }`}
          >
            <h2 className="text-xl font-semibold font-heading text-foreground mb-6">
              Registration Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={!agreed}
                  className={inputClasses}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Age & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="4"
                    max="99"
                    disabled={!agreed}
                    className={inputClasses}
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={!agreed}
                    className={inputClasses}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              {/* Email */}
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
                  disabled={!agreed}
                  className={inputClasses}
                  placeholder="your@email.com"
                />
              </div>

              {/* Class Selection */}
              <div>
                <label htmlFor="selectedClass" className="block text-sm font-medium mb-2">
                  Select Class *
                </label>
                <select
                  id="selectedClass"
                  name="selectedClass"
                  value={formData.selectedClass}
                  onChange={handleChange}
                  required
                  disabled={!agreed}
                  className={inputClasses}
                >
                  <option value="">Choose a class...</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Batch */}
              <div>
                <label htmlFor="preferredBatch" className="block text-sm font-medium mb-2">
                  Preferred Batch / Timing *
                </label>
                <select
                  id="preferredBatch"
                  name="preferredBatch"
                  value={formData.preferredBatch}
                  onChange={handleChange}
                  required
                  disabled={!agreed}
                  className={inputClasses}
                >
                  <option value="">Select preferred batch...</option>
                  {batches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Experience Level *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {experienceLevels.map((level) => (
                    <label
                      key={level}
                      className={`relative flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all text-sm font-medium ${
                        formData.experienceLevel === level
                          ? "border-primary bg-primary/5 ring-2 ring-primary text-primary"
                          : "border-border hover:border-primary/50 text-foreground"
                      } ${!agreed ? "opacity-40 pointer-events-none" : ""}`}
                    >
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={level}
                        checked={formData.experienceLevel === level}
                        onChange={handleChange}
                        className="sr-only"
                        disabled={!agreed}
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  disabled={!agreed}
                  className={`${inputClasses} resize-none`}
                  placeholder="Any medical conditions, questions, or special requirements?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !agreed}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </form>

            {/* Help */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Need help choosing a class?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+16477877475"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone size={18} />
                  Call Us
                </a>
                <a
                  href="https://wa.me/16477877475"
                  className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
