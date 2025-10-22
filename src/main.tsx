import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Items from "./pages/Items";
import ItemNew from "./pages/ItemNew";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{maxWidth: 900, margin: "0 auto", fontFamily: "system-ui"}}>
      <nav style={{display:"flex", gap:12, padding:12, borderBottom:"1px solid #eee"}}>
        <Link to="/">Items</Link>
        <Link to="/items/new">New Item</Link>
      </nav>
      {children}
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout><Items /></Layout> },
  { path: "/items/new", element: <Layout><ItemNew /></Layout> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
