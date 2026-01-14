import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Profile
  app.get(api.profile.get.path, async (req, res) => {
    const profile = await storage.getProfile();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Guestbook
  app.get(api.guestbook.list.path, async (req, res) => {
    const entries = await storage.getGuestbookEntries();
    res.json(entries);
  });

  app.post(api.guestbook.create.path, async (req, res) => {
    try {
      const input = api.guestbook.create.input.parse(req.body);
      const entry = await storage.createGuestbookEntry(input);
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProfile = await storage.getProfile();
  if (!existingProfile) {
    await storage.createProfile({
      name: "Erdogan Kaya",
      title: "Senior Full Stack Engineer",
      bio: "Passionate developer with over 8 years of experience building scalable web applications. Expert in React, Node.js, and cloud architecture. I love turning complex problems into simple, beautiful solutions.",
      imageUrl: "/images/profile.jpg",
      email: "erdogan@example.com",
      githubUrl: "https://github.com/erdogan",
      linkedinUrl: "https://www.linkedin.com/in/erdogan-kaya-9a4108100/"
    });

    await storage.createProject({
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with Next.js and Stripe integration. Features real-time inventory management and AI-powered recommendations.",
      tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
      projectUrl: "https://example.com/ecommerce",
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80" 
    });

    await storage.createProject({
      title: "Task Management SaaS",
      description: "Real-time collaborative project management tool for remote teams. Includes video conferencing, whiteboard, and kanban boards.",
      tags: ["TypeScript", "WebSockets", "Redis", "AWS"],
      projectUrl: "https://example.com/task-app",
      imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
    });

    await storage.createProject({
      title: "AI Content Generator",
      description: "Marketing copy generator powered by OpenAI GPT-4. Helps businesses create SEO-optimized blog posts and social media content in seconds.",
      tags: ["OpenAI API", "Python", "FastAPI", "React"],
      projectUrl: "https://example.com/ai-gen",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    });
  }
}
