import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-white mb-2">Erdogan Kaya</h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Erdogan Kaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
