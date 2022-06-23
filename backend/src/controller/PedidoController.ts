import { Request, Response } from "express";
import { CriarPedidoBusiness } from "../business/PedidoBusiness";
import { FormularioInputDTO } from "../model/CriarPedido";

const createBusiness = new CriarPedidoBusiness();

export class PedidosController {
  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, delivery_date, products } = req.body;

      const input: FormularioInputDTO = {
        name,
        delivery_date,
        products,
      };

      const token = await createBusiness.create(
        input.name,
        input.delivery_date,
        input.products
      );

      res.status(200).send({ "Pedido criado com sucesso": token });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };

  getallProducts = async (req: Request, res: Response) => {
    try {
      const products = await createBusiness.getallproducts();

      res.status(200).send({ Products: products });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };

  getvalueproductsID = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;

      const pedidos = await createBusiness.getlistaID(id);

      res.status(200).send({ Valor: pedidos });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
