import { z } from 'zod';
import { insertMessageSchema, insertGuestbookSchema, profile, projects, messages, guestbook } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile',
      responses: {
        200: z.custom<typeof profile.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
  },
  messages: {
    create: {
      method: 'POST' as const,
      path: '/api/messages',
      input: insertMessageSchema,
      responses: {
        200: z.custom<typeof messages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  guestbook: {
    list: {
      method: 'GET' as const,
      path: '/api/guestbook',
      responses: {
        200: z.array(z.custom<typeof guestbook.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/guestbook',
      input: insertGuestbookSchema,
      responses: {
        201: z.custom<typeof guestbook.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  weather: {
    get: {
      method: 'GET' as const,
      path: '/api/weather',
      responses: {
        200: z.object({
          daily: z.object({
            time: z.array(z.string()),
            temperature_2m_max: z.array(z.number()),
            temperature_2m_min: z.array(z.number()),
            weathercode: z.array(z.number()),
          }),
        }),
        500: errorSchemas.internal,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
