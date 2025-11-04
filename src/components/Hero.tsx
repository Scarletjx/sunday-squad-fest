import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium border border-white/30 animate-float">
              You're Invited! 🎉
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight tracking-tight">
            Sunday Funday
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
            Brunch, Karaoke & Good Times
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary-foreground/90 text-lg pt-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">This Sunday</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Langham Place, London</span>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="#schedule" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              See the Schedule
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
