import express from "express";
import { Connection } from "./config/db.connect.js";
import { authenticate } from "./Middleware/Authenticate.js";
import { userRouter } from "./routes/users.routes.js";
import cors from "cors";
import { OrderRouter } from "./routes/order.routes.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  console.log("Welcome to Home")
})

app.use("/user", userRouter);
app.use(authenticate);
app.use("/order", OrderRouter);

app.listen(PORT, () => {
  Connection()
    .then((res) => {
      console.log(res);
      console.log("Listening on", PORT);
    })
    .catch((err) => {
      console.log(err);
    });
});
