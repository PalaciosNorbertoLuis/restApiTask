import mongoose from "mongoose";
import config from "./config";

(async () => {
try {
  const db = await mongoose.connect(config.mongoURL);
  console.log(db.connection.name);
} catch (error) {
  console.error(error);
}
})();
