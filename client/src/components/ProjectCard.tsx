import { type Project } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div className="aspect-video overflow-hidden bg-muted relative">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50">
            <span className="text-muted-foreground text-sm">No Preview</span>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          <a 
            href="#"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-black transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {project.description}
        </p>
        
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
