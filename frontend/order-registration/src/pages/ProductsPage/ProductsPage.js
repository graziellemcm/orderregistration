import React from "react";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { Conteiner, Table, Th, Td } from "./styled";

const Product = () => {
  const products = useRequestData([], `${BASE_URL}/pedidos/products`);

  let lista = products[0].map(function (element) {
    return (
      <tr>
        <Td>{element.id}</Td>
        <Td>{element.name}</Td>
        <Td>{element.price}</Td>
        <Td>{element.qty_stock}</Td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Produtos em estoque:</h1>
      <Conteiner>
      <Table>
        <colgroup span="4" class="columns"></colgroup>
        
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Preço</Th>
        <Th>Quantidade</Th>
        
        {lista}
      </Table>
      </Conteiner>
    </div>
  );
};

export default Product;
