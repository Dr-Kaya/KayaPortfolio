import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  email: text("email").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  projectUrl: text("project_url"),
  tags: text("tags").array(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true });

export type Profile = typeof profile.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
