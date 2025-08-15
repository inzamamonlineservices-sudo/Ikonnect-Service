import express from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize routes
(async () => {
  await registerRoutes(app);
  
  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }
})();

// Export for Vercel serverless
export default app;
