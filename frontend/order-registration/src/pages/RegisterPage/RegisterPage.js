import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { Center, Layout } from "../RegisterPage/styled";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { registration } from "../../services/Pedidos";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    name: "",
    delivery_date: "",
    product_id: "",
    qty: ""
  });

  const onRegistration = (e) => {
    e.preventDefault();
    registration(form,clearForm)
  
  };

  
  return (
    <>
        <Layout>
          <Center>
            <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }}>
              Realize o cadastro do Pedido!
            </Typography>
            <form onSubmit={onRegistration}>
              <TextField
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                label={"Nome completo"}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: -0.1 }}
                margin="dense"
                required
                autoFocus
                type={"name"}
              />

              <TextField
                name={"delivery_date"}
                value={form.delivery_date}
                onChange={onChangeForm}
                variant={"outlined"}
                sx={{ width: 350, marginBottom: 1 }}
                margin="dense"
                required
                type={"Date"}
              />

                <TextField
                  name={"product_id"}
                  value={form.product_id}
                  onChange={onChangeForm}
                  label={"Produtos"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"text"}
                  autoComplete={"on"}
                  required
                />
                 

              <TextField
                  name={"qty"}
                  value={form.qty}
                  onChange={onChangeForm}
                  label={"Quantidade"}
                  variant={"outlined"}
                  sx={{ width: 350, marginBottom: 1 }}
                  margin="dense"
                  type={"number"}
                />

              <Button
                fullWidth
                color="primary"
                variant="contained"
                type={"submit"}
              >
                {" "}
                Cadastrar 
              </Button>
            </form>
          </Center>
        </Layout>
      
    </>
  );
}