import React from "react";
import { DivHeader, Header, LogoImage } from "./styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  goToProducts,
  goToRegister,
  goToStock,
  goToTotalValue,
} from "../routes/coordinator";

export default function Headers() {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <DivHeader>
          <Button
            color="white"
            onClick={() => {
              goToRegister(navigate);
            }}
          >
            Criar Pedido
          </Button>
          <Button
            color="white"
            onClick={() => {
              goToStock(navigate);
            }}
          >
            Ver Estoque
          </Button>
          <Button
            color="white"
            onClick={() => {
              goToProducts(navigate);
            }}
          >
            Produtos
          </Button>
          <Button
            color="white"
            onClick={() => {
              goToTotalValue(navigate);
            }}
          >
            Ver valor do pedido
          </Button>
        </DivHeader>
      </Header>
    </div>
  );
}
