import express from "express";
import { PedidosController } from "../controller/PedidoController";
import { DeletarController } from "../controller/DeleteController";
import { EditarController } from "../controller/EditarquantidadeController";
import { EstoqueController } from "../controller/EstoqueController";

export const pedidosRouter = express.Router();

const criarpedidoController = new PedidosController();
const estoqueController = new EstoqueController();
const editarController = new EditarController();
const deletarController = new DeletarController();

pedidosRouter.post("/create", criarpedidoController.create);
pedidosRouter.get("/qty/:id", estoqueController.getqty);
pedidosRouter.get("/products", criarpedidoController.getallProducts);
pedidosRouter.put("/qty/:id", editarController.editQty);
pedidosRouter.delete("/product/:id", deletarController.delete);
pedidosRouter.get("/totalvalue/:id",criarpedidoController.getvalueproductsID)