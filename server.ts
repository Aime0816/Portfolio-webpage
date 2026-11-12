import "dotenv/config";
import express from "express";
import path from "node:path";
import chat from "./api/chat.js";
import contact from "./api/contact.js";
const app = express();
app.use(express.json({ limit: "8kb" }));
app.all("/api/chat", chat);
app.all("/api/contact", contact);
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(process.cwd(), "dist")));
  app.get("*", (_req, res) =>
    res.sendFile(path.join(process.cwd(), "dist/index.html")),
  );
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
}
const portArg = process.argv.indexOf("--port");
const port = Number(
  process.env.PORT || (portArg >= 0 ? process.argv[portArg + 1] : 3000),
);
app.listen(port, "0.0.0.0", () =>
  console.log("Portfolio listening on port " + port),
);
