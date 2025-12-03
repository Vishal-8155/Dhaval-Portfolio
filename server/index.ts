import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import type { ViteDevServer } from "vite";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT) || 3000;

async function createApp() {
  const app = express();

  if (!isProd) {
    // In development, use Vite in middleware mode for HMR + bundling
    const vite: ViteDevServer = await createViteServer({
      // Use the existing Vite config so aliases like "@" work correctly
      configFile: path.resolve(__dirname, "../vite.config.ts"),
      server: {
        middlewareMode: true,
      },
      appType: "custom",
    });

    app.use(vite.middlewares);

    // Serve index.html for all routes in development
    app.get("*", async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const htmlPath = path.resolve(__dirname, "../client/index.html");
        let html = await vite.transformIndexHtml(url, await import("fs").then(fs => fs.promises.readFile(htmlPath, "utf-8")));
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // In production, serve the built static files
    const distPath = path.resolve(__dirname, "../dist/public");

    app.use(express.static(distPath));

    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  return app;
}

async function start() {
  const app = await createApp();

  app.listen(port, () => {
    console.log(
      `[server] Listening on http://localhost:${port} in ${
        isProd ? "production" : "development"
      } mode`,
    );
  });
}

start().catch((err) => {
  console.error("[server] Failed to start server", err);
  process.exit(1);
});
