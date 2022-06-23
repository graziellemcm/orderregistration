import { Request, Response } from "express";
import { EditarBusiness } from "../business/EditarquantidadeBusiness";
import { EditInputDTO } from "../model/CriarPedido";

const editarBusiness = new EditarBusiness();

export class EditarController {
  editQty = async (req: Request, res: Response) => {
    try {
      const newqty = Number(req.query.newqty);
      const id = req.params.id as string;

      const input: EditInputDTO = {
        newqty,
      };

      const qty = await editarBusiness.editqty(input.newqty, id);

      res.status(200).send({ NovaQuantidade: qty });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
