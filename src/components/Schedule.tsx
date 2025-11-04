import { Clock, Coffee, Mic, Utensils } from "lucide-react";
import appleButterInterior from "@/assets/apple-butter-interior.jpg";
import appleButterFood from "@/assets/apple-butter-food.jpg";
import luckyVoiceLogo from "@/assets/lucky-voice-logo.png";

const Schedule = () => {
  const events = [
    {
      time: "13:00",
      title: "Brunch at Apple Butter Cafe",
      description: "Start our day with delicious brunch in a cozy atmosphere",
      location: "4-5 Langham Pl, London W1B 3DG",
      icon: Coffee,
      image: appleButterInterior,
      color: "bg-secondary",
    },
    {
      time: "15:00 - 17:00",
      title: "Karaoke at Lucky Voice Soho",
      description: "Show off those vocal talents (or just have fun trying!)",
      location: "Lucky Voice Soho",
      icon: Mic,
      image: luckyVoiceLogo,
      color: "bg-primary",
      isLogo: true,
    },
    {
      time: "17:00+",
      title: "Dinner (Optional)",
      description: "If we're still hungry, let's grab dinner together!",
      location: "TBD - We'll decide together",
      icon: Utensils,
      image: appleButterFood,
      color: "bg-accent",
    },
  ];

  return (
    <section id="schedule" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Plan
          </h2>
          <p className="text-xl text-muted-foreground">
            A perfect Sunday with great food, music, and friends
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-accent transform md:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative animate-slide-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Time badge */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary items-center justify-center shadow-soft z-10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-4 ${event.color}`}>
                        <event.icon className="w-4 h-4" />
                        {event.time}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 text-lg">
                        {event.description}
                      </p>
                      
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className={`relative overflow-hidden rounded-3xl shadow-card ${
                      event.isLogo ? 'bg-white p-8' : ''
                    }`}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full ${
                          event.isLogo 
                            ? 'h-48 object-contain' 
                            : 'h-64 object-cover'
                        } transform hover:scale-105 transition-transform duration-500`}
                      />
                      {!event.isLogo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <div className="inline-block bg-gradient-card p-8 rounded-3xl shadow-card max-w-2xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Can't Wait to See You! 🎊
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              It's going to be an amazing Sunday filled with great food, music, laughter, and memories. 
              Let's make it unforgettable!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://maps.app.goo.gl/nMyg9upW49NJBGPTA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:shadow-soft transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Get Directions
              </a>
              <a 
                href="https://www.youtube.com/watch?v=ooOELrGMn14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:shadow-soft transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
