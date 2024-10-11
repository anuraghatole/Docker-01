import express from "express";
import { mongoDB } from "./db/db.connection.js";
import userRoute from "./routes/user.route.js";
import userLogin from "./routes/user.route.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hi");
});

mongoDB(
  process.env.MONGO_URL ||
    "mongodb+srv://kaju:kaju@cluster0.hr80w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.use("/", userRoute);
app.use("/", userLogin);

app.listen(PORT, () => {
  console.log("server running on http://localhost:8000");
});
