import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";


export const registration = (body, clearForm) => {
  axios
  
    .post(`${BASE_URL}/pedidos/create`, body)
    .then((res) => {
      alert("Pedido realizado!");
      clearForm();
    })
    .catch((err) => {
      alert(`${err.response}`);
    });
};
export const stock = (form) => {
 
  axios
    .get(BASE_URL + `/pedidos/qty/${form.id}`)
    .then((res) => {
      console.log(res.data.Quantidade)
    })
    .catch((err) => {
      alert(`${err.response}`);
    });
};
export const totalValue = (form) => {
 
  axios
    .get(BASE_URL + `/pedidos/totalvalue/${form.id}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      alert(`${err.response}`);
    });
};