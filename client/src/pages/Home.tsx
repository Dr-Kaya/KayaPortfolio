import { useProfile } from "@/hooks/use-profile";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import stockImage from "@assets/stock_images/professional_softwar_92ca1815.jpg";

export default function Home() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: projects, isLoading: projectsLoading } = useProjects();

  if (profileLoading) return <div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>;

  const featuredProjects = projects?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
              Available for freelance work
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              I build <span className="text-gradient-primary">digital products</span> that solve real problems.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {profile?.bio || "I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on accessible, human-centered products."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0">
                  View Projects
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40">
                  Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-card">
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              {profile?.imageUrl && (
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl">
                A selection of projects that showcase my passion for building high-quality software.
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsLoading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-2xl h-[400px] animate-pulse" />
              ))
            ) : (
              featuredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))
            )}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
