import express from "express";
import { AddressInfo } from "net";
import { pedidosRouter } from "./router/pedidosRouter";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

app.use("/pedidos", pedidosRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;