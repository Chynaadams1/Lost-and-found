import { useEffect, useState } from "react";
import { service } from "../lib/service.factory";
import type { Item } from "../lib/service";

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await service.listApprovedItems();
        setItems(data);
      } catch (e: any) {
        setErr(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p style={{ padding: 12 }}>Loading…</p>;
  if (err) return <p style={{ color: "#b00020", padding: 12 }}>Error: {err}</p>;

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 800, margin: "0 auto", padding: 12 }}>
      <h2>Recent items</h2>
      {items.length === 0 && <p>No items yet.</p>}
      {items.map((it) => (
        <div key={it.id} style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          <span style={{ padding: "2px 8px", borderRadius: 999, fontSize: 12, background: "#cfe2ff", marginRight: 8 }}>
            {it.status}
          </span>
          <strong>{it.title}</strong>
          <div style={{ color: "#555" }}>{it.description}</div>
          <div style={{ color: "#777", fontSize: 12 }}>
            Posted {new Date(it.created_at).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
