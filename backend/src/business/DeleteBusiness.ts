import { PedidoDatabase } from "../data/PedidoDatabase";
import { TokenGenerator } from "../services/TokenGenerator";

const pedidoDB = new PedidoDatabase();
const authenticator = new TokenGenerator();

export class DeletarBusiness {
  delete = async (id: string) => {
    if (!id) {
      throw new Error("Número de ID do produto inválido!");
    }
    const product = await pedidoDB.getIDproductId(id);

    const quantity = await pedidoDB.getqtyIDvenda(id);
    const stock = await pedidoDB.getqtyID(product);

    const debit = Number(quantity + stock);
    await pedidoDB.updateqty(debit, product);

    const value = await pedidoDB.deleteitem(id);

    return value;
  };
}
