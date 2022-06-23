export interface FormularioInputDTO {
  name: string;
  delivery_date: Date;
  products: [Product];
}
export interface Product {
  product_id: string;
  qty: number;
}

export type Formulariotype = {
  id: string;
  name: string;
  delivery_date: Date;
};
export type Producttype = {

  sale_id: string;
  products:[Product]
};
export type qtytype = {
  qty_stock: number;
};
export interface EditInputDTO {
  newqty: number;
}
export class Formulario {
  constructor(
    private id: string,
    private name: string,
    private delivery_date: Date
  ) {}

  getid() {
    return this.id;
  }
  getname() {
    return this.name;
  }
  getdate_delivery_date() {
    return this.delivery_date;
  }

  static toShowModel(data: any): Formulario {
    return new Formulario(data.id, data.name, data.delivery_date);
  }
}
