import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Server start failed:", error.message);
  }
};
startServer();
