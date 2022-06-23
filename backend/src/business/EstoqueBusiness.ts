import { PedidoDatabase } from "../data/PedidoDatabase";

const qtyDB = new PedidoDatabase();

export class EstoqueBusiness {
  async searchqtyID(id: string) {
    if (!id) {
      throw new Error("Número de ID inválido!");
    }

    const qty = await qtyDB.getqtyID(id);

    return qty;
  }
}
