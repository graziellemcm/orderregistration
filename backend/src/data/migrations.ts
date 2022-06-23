import { BaseDatabase } from "../data/BaseDatabase";

export class Migrations extends BaseDatabase {
  static migrations = () => {
    BaseDatabase.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS Products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR( 100 ),
            price DECIMAL( 10 , 2 ),
            qty_stock DECIMAL( 10 , 2 )
            );
            
            CREATE TABLE IF NOT EXISTS CadastroDePedidos(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(45) NOT NULL,
            delivery_date DATE NOT NULL
            );
            
            CREATE TABLE VendaItem
            (
            id VARCHAR(255),
            sale_id VARCHAR(255),
            product_id VARCHAR(255),
            qty int,
            FOREIGN KEY (sale_id) REFERENCES CadastroDePedidos(id),
            FOREIGN KEY (product_id) REFERENCES Products(id)
            );
    `
      )
      .then(() => console.log("Tabelas criadas!"))
      .catch((error) => console.log(error.message))
      .finally(() => {
        BaseDatabase.connection.destroy();
      });
  };
}
Migrations.migrations();
