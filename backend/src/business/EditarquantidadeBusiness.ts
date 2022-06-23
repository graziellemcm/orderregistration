import { PedidoDatabase } from "../data/PedidoDatabase";
import { TokenGenerator } from "../services/TokenGenerator";

const pedidoDB = new PedidoDatabase();
const authenticator = new TokenGenerator();

export class EditarBusiness {
  editqty = async (newqty: number, id: string) => {
    if (!id) {
      throw new Error("Número de ID da compra inválido!");
    }

    const product = await pedidoDB.getIDproductId(id);
    let stock = await pedidoDB.getqtyID(product);

    const quantidadeAtual = await pedidoDB.getqtyIDvenda(id);
    let difference = 0;
    let quantidadeAtualizada = 0;

    difference = newqty - quantidadeAtual;
    quantidadeAtualizada = stock - difference;

    await pedidoDB.updateqty(quantidadeAtualizada, product);

    const value = await pedidoDB.editqtyy(newqty, id);

    return value;
  };
}
