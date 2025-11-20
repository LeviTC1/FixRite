import "dotenv/config";
import express from "express";
import cors, { CorsOptions } from "cors";
import contactRoute from "./contactRoute";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const defaultAllowedOrigins = [
  "http://localhost:5173",
  "https://fixrite247.com",
  "https://www.fixrite247.com",
  "https://fixrite.vercel.app",
];
const envAllowedOrigins = process.env.ALLOWED_ORIGINS;
const configuredOrigins = (envAllowedOrigins ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowAnyOrigin = configuredOrigins.includes("*");
const allowedOrigins = allowAnyOrigin ? [] : configuredOrigins;
const effectiveAllowedOrigins = allowedOrigins.length > 0 ? allowedOrigins : defaultAllowedOrigins;
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin || allowAnyOrigin || effectiveAllowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Accept"],
};

app.use(cors(corsOptions));
app.options("/api", cors(corsOptions));
app.options(/\/api\/.*/, cors(corsOptions));
app.use(express.json());

app.use("/api/contact", contactRoute);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "FixRite API" });
});

app.listen(PORT, () => {
  console.log(`[api] listening on port ${PORT}`);
});
