import express from "express";
import morgan from "morgan"
import TasksRoutes from "./routes/tasks.routes";
import config from "./config";
import cors from "cors"

const app = express();
//setings
app.set("port", config.port);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.get("/", (req, res) => {
  //res.redirect("/api/tasks");
  res.json({mesagge:"Hola mundo"})
});
app.use("/api/tasks", TasksRoutes);

export default app;
