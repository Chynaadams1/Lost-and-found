import type { LostFoundService, Item, Status } from "./service";

let seed: Item[] = [
  { id: crypto.randomUUID(), title: "Blue Hydro Flask", description: "Library 2nd floor", status: "Found", created_at: new Date().toISOString() },
  { id: crypto.randomUUID(), title: "UMES hoodie", description: "Gym bleachers", status: "Lost", created_at: new Date(Date.now()-86400000).toISOString() },
];

const delay = (ms=300) => new Promise(res => setTimeout(res, ms));

export const mockService: LostFoundService = {
  async listApprovedItems() {
    await delay();
    return seed;
  },
  async createItem({ title, description, status }: { title: string; description?: string; status: Status }) {
    await delay();
    const item: Item = {
      id: crypto.randomUUID(),
      title,
      description: (description ?? '').trim() || null,
      status,
      created_at: new Date().toISOString(),
    };
    seed = [item, ...seed];
    return item;
  }
};
