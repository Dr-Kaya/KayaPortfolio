import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              All Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              A complete collection of my work, ranging from web applications and mobile apps to open source libraries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl h-[400px] animate-pulse" />
              ))
            ) : (
              projects?.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))
            )}
            
            {projects?.length === 0 && (
              <div className="col-span-full py-20 text-center text-muted-foreground">
                <p>No projects found yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
