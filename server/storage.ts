import { db } from "./db";
import { profile, projects, messages, guestbook, type Profile, type InsertProfile, type Project, type InsertProject, type Message, type InsertMessage, type GuestbookEntry, type InsertGuestbookEntry } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getProfile(): Promise<Profile | undefined>;
  createProfile(profile: InsertProfile): Promise<Profile>;
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  createMessage(message: InsertMessage): Promise<Message>;
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const [p] = await db.select().from(profile).limit(1);
    return p;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const [p] = await db.insert(profile).values(insertProfile).returning();
    return p;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [p] = await db.insert(projects).values(insertProject).returning();
    return p;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [m] = await db.insert(messages).values(insertMessage).returning();
    return m;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return await db.select().from(guestbook).orderBy(desc(guestbook.createdAt));
  }

  async createGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const [e] = await db.insert(guestbook).values(entry).returning();
    return e;
  }
}

export const storage = new DatabaseStorage();
