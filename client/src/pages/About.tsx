import { useProfile } from "@/hooks/use-profile";
import { useWeather, getWeatherIcon, getWeatherDescription } from "@/hooks/use-weather";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Linkedin, Mail, Github, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudSun, MapPin } from "lucide-react";

const WeatherIcon = ({ code }: { code: number }) => {
  const iconType = getWeatherIcon(code);
  const className = "w-8 h-8";
  switch (iconType) {
    case "sun": return <Sun className={`${className} text-yellow-400`} />;
    case "cloud-sun": return <CloudSun className={`${className} text-yellow-300`} />;
    case "cloud": return <Cloud className={`${className} text-gray-400`} />;
    case "cloud-rain": return <CloudRain className={`${className} text-blue-400`} />;
    case "cloud-snow": return <CloudSnow className={`${className} text-blue-200`} />;
    case "cloud-lightning": return <CloudLightning className={`${className} text-purple-400`} />;
    default: return <Cloud className={`${className} text-gray-400`} />;
  }
};

export default function About() {
  const { data: profile, isLoading } = useProfile();
  const { data: weather, isLoading: weatherLoading } = useWeather();

  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
    "PostgreSQL", "TailwindCSS", "Next.js", "GraphQL",
    "Docker", "AWS", "Figma", "Git"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
                About Me
              </h1>
              
              <div className="prose prose-invert prose-lg text-muted-foreground mb-12">
                <p className="mb-6">
                  {profile?.bio || "Hello! I'm Erdogan Kaya, a passionate developer based in the digital world. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between."}
                </p>
                <p className="mb-6">
                  My goal is to always build products that provide pixel-perfect, performant experiences. I joined the engineering team at a startup where I work on a wide variety of interesting and meaningful projects on a daily basis.
                </p>
                <div className="flex gap-4 mb-8">
                  {profile?.linkedinUrl && (
                    <a 
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {profile?.githubUrl && (
                    <a 
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <Link href="/contact" className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold mb-6 text-white">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10 bg-card">
                {profile?.imageUrl && (
                  <img 
                    src={profile.imageUrl}
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-3xl z-0 hidden lg:block" />
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary/30 rounded-3xl z-0 hidden lg:block backdrop-blur-3xl" />
            </motion.div>
          </div>

          {/* Weather Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold">Weather in Arlington, TX</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {weatherLoading ? (
                Array.from({ length: 7 }).map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardContent className="p-4 h-32" />
                  </Card>
                ))
              ) : weather?.daily ? (
                weather.daily.time.map((date, index) => {
                  const dayName = new Date(date).toLocaleDateString("en-US", { weekday: "short" });
                  const monthDay = new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
                  return (
                    <Card key={date} className="border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-4 text-center">
                        <p className="font-semibold text-white">{dayName}</p>
                        <p className="text-xs text-muted-foreground mb-3">{monthDay}</p>
                        <div className="flex justify-center mb-3">
                          <WeatherIcon code={weather.daily.weathercode[index]} />
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {getWeatherDescription(weather.daily.weathercode[index])}
                        </p>
                        <div className="flex justify-center gap-2 text-sm">
                          <span className="text-white font-medium">
                            {Math.round(weather.daily.temperature_2m_max[index])}°
                          </span>
                          <span className="text-muted-foreground">
                            {Math.round(weather.daily.temperature_2m_min[index])}°
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <p className="col-span-full text-muted-foreground text-center py-8">
                  Weather data unavailable
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
