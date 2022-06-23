import { PedidoDatabase } from "../data/PedidoDatabase";
import { Formulariotype, Product, Producttype } from "../model/CriarPedido";
import { pedidosRouter } from "../router/pedidosRouter";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const pedidoDB = new PedidoDatabase();
const authenticator = new TokenGenerator();
const idGenerator = new IdGenerator();

export class CriarPedidoBusiness {
  create = async (name: string, delivery_date: Date, products: [Product]) => {
    try {
      if (!name) {
        throw new Error("Por favor preencha o campo name");
      }
      if (!delivery_date) {
        throw new Error("Por favor preencha o campo delivery_date");
      }
      products.map((product) => {
        if (!product.product_id) {
          throw new Error("Por favor preencha o campo product_id");
        }
        if (!product.qty) {
          throw new Error("Por favor preencha o campo qty");
        }
      });

      const id = idGenerator.generateId();

      const pedido: Formulariotype = {
        id,
        name,
        delivery_date,
      };
      const sale_id = id;
      const list: Producttype = {
        sale_id,
        products,
      };

      await pedidoDB.create(pedido);
      await pedidoDB.createvenda(list);
      products.map(async (product) => {
        const qtystock = await pedidoDB.getqtyID(product.product_id);
        if (qtystock < product.qty) {
          throw new Error("Quantidade indisponível");
        }
        const debitar = Number(qtystock - product.qty);
        await pedidoDB.updateqty(debitar, product.product_id);
      });

      const token = authenticator.generateToken({ id });

      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  getallproducts = async () => {
    const products = await pedidoDB.getallproducts();
    return products;
  };
  getlistaID = async (id: string) => {
    if (!id) {
      throw new Error("Número de ID da compra inválido!");
    }

    const sales = await pedidoDB.getIDvenda(id);

    const quantity = await Promise.all(
      sales.map(async (venda): Promise<number> => {
        const price = await pedidoDB.getpriceID(venda.product_id);
        const quantity = venda.qty;
        const totalvalue = price.price * quantity;
        return totalvalue;
      })
    );

    const soma = quantity.reduce(function (soma, i) {
      return soma + i;
    });
    return soma;
  };
}
