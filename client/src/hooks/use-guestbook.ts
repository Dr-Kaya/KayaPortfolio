import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { GuestbookEntry, InsertGuestbookEntry } from "@shared/schema";

export function useGuestbook() {
  return useQuery<GuestbookEntry[]>({
    queryKey: ["/api/guestbook"],
  });
}

export function useCreateGuestbookEntry() {
  return useMutation({
    mutationFn: async (entry: InsertGuestbookEntry) => {
      const res = await apiRequest("POST", "/api/guestbook", entry);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guestbook"] });
    },
  });
}
