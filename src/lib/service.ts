export type Status = 'Lost'|'Found'|'Returned';

export type Item = {
  id: string;
  title: string;
  description: string | null;
  status: Status;
  created_at: string;
};

export interface LostFoundService {
  listApprovedItems(): Promise<Item[]>;
  createItem(input: { title: string; description?: string; status: Status }): Promise<Item>;
}
