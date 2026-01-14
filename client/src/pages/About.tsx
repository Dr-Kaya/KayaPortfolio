import { useProfile } from "@/hooks/use-profile";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import stockImage from "@assets/stock_images/professional_softwar_92ca1815.jpg";

export default function About() {
  const { data: profile, isLoading } = useProfile();

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
                <p>
                  When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new cooking recipes.
                </p>
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
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img 
                  src={stockImage}
                  alt="Erdogan Kaya" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-3xl z-0 hidden lg:block" />
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-secondary/30 rounded-3xl z-0 hidden lg:block backdrop-blur-3xl" />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
