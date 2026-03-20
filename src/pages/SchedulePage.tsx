import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const schedule = [
  {
    day: "Tuesday",
    classes: [
      { time: "5:00 PM - 6:00 PM", name: "Kids Bhangra", level: "Beginner", location: "Studio A" },
      { time: "5:30 PM - 6:30 PM", name: "Giddha Class", level: "All Levels", location: "Studio B" },
      { time: "6:00 PM - 7:00 PM", name: "Workout Class", level: "All Levels", location: "Studio A" },
      { time: "7:00 PM - 8:00 PM", name: "Adult Bhangra", level: "Beginner", location: "Studio A" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "5:00 PM - 6:00 PM", name: "Kids Bhangra", level: "Beginner", location: "Studio A" },
      { time: "5:30 PM - 6:30 PM", name: "Giddha Class", level: "All Levels", location: "Studio B" },
      { time: "6:00 PM - 7:00 PM", name: "Workout Class", level: "All Levels", location: "Studio A" },
      { time: "7:00 PM - 8:00 PM", name: "Adult Bhangra", level: "Beginner", location: "Studio A" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "4:00 PM - 5:00 PM", name: "Kids Bhangra", level: "Beginner", location: "Studio A" },
      { time: "5:30 PM - 6:30 PM", name: "Giddha Class", level: "All Levels", location: "Studio B" },
      { time: "6:30 PM - 7:30 PM", name: "Adult Bhangra", level: "Intermediate", location: "Studio A" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "4:00 PM - 5:00 PM", name: "Kids Bhangra", level: "Beginner", location: "Studio A" },
      { time: "5:30 PM - 6:30 PM", name: "Giddha Class", level: "All Levels", location: "Studio B" },
      { time: "6:30 PM - 7:30 PM", name: "Adult Bhangra", level: "Intermediate", location: "Studio A" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "beginner":
      return "bg-secondary/20 text-secondary";
    case "intermediate":
      return "bg-accent/20 text-accent";
    case "advanced":
      return "bg-primary/20 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div>
      {/* Header */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="heading-display mb-6">Class Schedule</h1>
          <p className="text-body-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Find a class time that works for you. We offer flexible scheduling 
            to accommodate busy families and working professionals.
          </p>
        </div>
      </section>

      {/* Schedule Table - Desktop */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Mobile Day Selector */}
          <div className="lg:hidden mb-8">
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-card font-medium"
            >
              {schedule.map((day) => (
                <option key={day.day} value={day.day}>
                  {day.day}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Schedule */}
          <div className="lg:hidden space-y-4">
            {schedule
              .filter((day) => day.day === selectedDay)
              .map((day) => (
                <div key={day.day}>
                  <h3 className="font-display text-xl font-semibold mb-4">{day.day}</h3>
                  <div className="space-y-3">
                    {day.classes.map((cls, i) => (
                      <div key={i} className="card-cultural">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(cls.level)}`}>
                            {cls.level}
                          </span>
                          <span className="text-sm text-muted-foreground">{cls.location}</span>
                        </div>
                        <h4 className="font-semibold mb-1">{cls.name}</h4>
                        <p className="text-sm text-muted-foreground">{cls.time}</p>
                        <Link
                          to={`/register?class=${cls.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="btn-primary text-sm py-2 mt-3 w-full text-center"
                        >
                          Register
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop Schedule */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-display">Day</th>
                  <th className="p-4 text-left font-display">Time</th>
                  <th className="p-4 text-left font-display">Class</th>
                  <th className="p-4 text-left font-display">Level</th>
                  <th className="p-4 text-left font-display">Location</th>
                  <th className="p-4 text-center font-display">Action</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((day, dayIndex) =>
                  day.classes.map((cls, clsIndex) => (
                    <tr
                      key={`${day.day}-${clsIndex}`}
                      className={`border-b border-border ${dayIndex % 2 === 0 ? "bg-muted/50" : "bg-card"}`}
                    >
                      {clsIndex === 0 && (
                        <td
                          rowSpan={day.classes.length}
                          className="p-4 font-semibold align-top border-r border-border"
                        >
                          {day.day}
                        </td>
                      )}
                      <td className="p-4 text-muted-foreground">{cls.time}</td>
                      <td className="p-4 font-medium">{cls.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cls.level)}`}>
                          {cls.level}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{cls.location}</td>
                      <td className="p-4 text-center">
                        <Link
                          to={`/register?class=${cls.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          Register
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-12 p-6 bg-muted rounded-xl">
            <h3 className="font-display text-xl font-semibold mb-4">Schedule Notes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Holiday breaks align with local school calendars</li>
              <li>• Private lessons available by appointment</li>
              <li>• Workshop series topics rotate monthly – check announcements</li>
              <li>• Competition team schedule may vary during competition season</li>
              <li>• Online classes available for all regular sessions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto text-center">
          <h2 className="heading-section mb-4">Find Your Perfect Time</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a time that works? Contact us about private lessons or 
            additional class options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/register" className="btn-primary flex items-center gap-2">
              Register for a Class
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
