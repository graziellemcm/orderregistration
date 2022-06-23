import { Request, Response } from "express";
import { DeletarBusiness } from "../business/DeleteBusiness";

const deletarBusiness = new DeletarBusiness();

export class DeletarController {
  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      await deletarBusiness.delete(id);

      res.status(200).send("Produto deletado com sucesso!");
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
