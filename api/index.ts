import express from "express";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple API routes
app.post("/api/contact", async (req, res) => {
  try {
    // Simple contact form handling
    console.log("Contact form submission:", req.body);
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully"
    });
  } catch (error) {
    console.error("Error handling contact:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch contacts" 
    });
  }
});

app.get("/api/blog", async (req, res) => {
  try {
    const samplePosts = [
      {
        id: "1",
        title: "The Future of AI in Business Automation",
        slug: "future-ai-business-automation",
        excerpt: "Explore how artificial intelligence is revolutionizing business processes.",
        content: "Full blog post content about AI automation...",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        author: "John Smith",
        publishDate: "2024-12-15",
        category: "AI & Technology",
        tags: ["AI", "Automation", "Business"],
        readTime: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    res.json(samplePosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch blog posts" 
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    
    // Serve index.html for all routes (SPA)
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    // Fallback if dist doesn't exist
    app.get("*", (req, res) => {
      res.json({ message: "API is working, but frontend is not built yet" });
    });
  }
}

// Export for Vercel serverless
export default app;
