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
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TotalValue() {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { form, onChangeForm, clearForm } = useForm({
    id: "",
  });
  const totalValue = (form) => {
    axios
      .get(BASE_URL + `/pedidos/totalvalue/${form.id}`)
      .then((res) => {
        setData(res.data.Valor);
      })
      .catch((err) => {
        alert(`${err.response}`);
      });
  };
  const onRegistration = (e) => {
    e.preventDefault();
    totalValue(form);
  };

  return (
    <>
      <Layout>
        <Center>
          <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }}>
            Veja o valor total de um pedido!
          </Typography>
          <form onSubmit={onRegistration}>
            <TextField
              name={"id"}
              value={form.id}
              onChange={onChangeForm}
              label={"ID do pedido"}
              variant={"outlined"}
              sx={{ width: 350, marginBottom: -0.1 }}
              margin="dense"
              required
              autoFocus
              type={"text"}
            />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type={"submit"}
            >
              {" "}
              Ver valor total
            </Button>
            <h2>Valor Total:</h2>
            {data}
          </form>
        </Center>
      </Layout>
    </>
  );
}
