import React, { useState } from "react";
import { service } from "../lib/service.factory";

export default function ItemNew() {
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(""); setErr("");

    const f = e.currentTarget;
    const title = (f.elements.namedItem("title") as HTMLInputElement)?.value.trim();
    const description = (f.elements.namedItem("description") as HTMLTextAreaElement)?.value.trim();
    const status = (f.elements.namedItem("status") as HTMLSelectElement)?.value as "Lost" | "Found" | "Returned";

    if (!title) { setErr("Title is required"); return; }

    try {
      await service.createItem({ title, description, status });
      setMsg("Item submitted (mock).");
      f.reset();
    } catch (e: any) {
      setErr(e.message || "Failed to submit");
    }
  }

  return (
    <form onSubmit={onSubmit} style={{display:"grid", gap:8, maxWidth:520, margin:"0 auto", padding:12}}>
      <h2>New item</h2>
      {msg && <div style={{color:"#0f5132"}}>{msg}</div>}
      {err && <div style={{color:"#b00020"}}>{err}</div>}

      <input name="title" placeholder="Title" />
      <textarea name="description" placeholder="Description (optional)" />
      <select name="status" defaultValue="Found">
        <option>Lost</option>
        <option>Found</option>
        <option>Returned</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
