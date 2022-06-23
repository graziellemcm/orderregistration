import { Formulariotype, Producttype, qtytype } from "../model/CriarPedido";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "./BaseDatabase";
const idGenerator = new IdGenerator();
export class PedidoDatabase extends BaseDatabase {
  public create = async (pedido: Formulariotype) => {
    await BaseDatabase.connection()
      .insert({
        id: pedido.id,
        name: pedido.name,
        delivery_date: pedido.delivery_date,
      })
      .into("CadastroDePedidos");
  };

  //precisa ter o id do produto para criar

  public createvenda = async (product: Producttype) => {
    product.products.map(async (p) => {
      await BaseDatabase.connection()
        .insert({
          id: idGenerator.generateId(),
          sale_id: product.sale_id,
          product_id: p.product_id,
          qty: p.qty,
        })
        .into("VendaItem");
    });
  };

  public getqtyID = async (id: string) => {
    const qty = await BaseDatabase.connection()
      .select("qty_stock")
      .from("Products")
      .where("id", id);
    return qty[0].qty_stock;
  };
  public getpriceID = async (id: string) => {
    const price = await BaseDatabase.connection()
      .select("price")
      .from("Products")
      .where("id", id);
    return price[0];
  };

  public getcadastroID = async (id: string) => {
    const cadastro = await BaseDatabase.connection()
      .select("*")
      .from("CadastroDePedidos")
      .where("id", id);
    return cadastro[0];
  };
  public getqtyIDvenda = async (id: string) => {
    const qty = await BaseDatabase.connection()
      .select("qty")
      .from("VendaItem")
      .where("id", id);
    console.log(qty[0]);
    return qty[0];
  };
  public getIDvenda = async (id: string) => {
    const lista = await BaseDatabase.connection()
      .select("*")
      .from("VendaItem")
      .where("sale_id", id);
    return lista;
  };
  public getIDproductId = async (id: string) => {
    const qty = await BaseDatabase.connection()
      .select("product_id")
      .from("VendaItem")
      .where("id", id);
    return qty[0].product_id;
  };

  public getallproducts = async () => {
    const products = await BaseDatabase.connection()
      .select("*")
      .from("Products");

    return products;
  };

  // edit BD

  public updateqty = async (debitar: number, product_id: string) => {
    await BaseDatabase.connection()
      .update({
        qty_stock: debitar,
      })
      .where("id", product_id)
      .into("Products");
  };

  //id do vendaitem

  public editqtyy = async (newqty: number, id: string) => {
    await BaseDatabase.connection()
      .update({
        qty: newqty,
      })
      .where("id", id)
      .into("VendaItem");
    return newqty;
  };
  public deleteitem = async (id: string) => {
    await BaseDatabase.connection()
      .delete("product_id")
      .from("VendaItem")
      .where("id", id);
  };
}
