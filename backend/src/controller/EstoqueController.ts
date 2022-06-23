import { Request, Response } from "express";
import { EstoqueBusiness } from "../business/EstoqueBusiness";

const getestoqueBusiness = new EstoqueBusiness();

export class EstoqueController {
  getqty = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const qty = await getestoqueBusiness.searchqtyID(id);

      res.status(200).send({ Quantidade: qty });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
