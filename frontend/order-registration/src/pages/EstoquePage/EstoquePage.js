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
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import axios from "axios";
import { stock } from "../../services/Pedidos";

export default function Estoque() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState("");

  const { form, onChangeForm, clearForm } = useForm({
    id: "",
  });
  const stock = (form) => {
    axios
      .get(BASE_URL + `/pedidos/qty/${form.id}`)
      .then((res) => {
        setData(res.data.Quantidade);
      })
      .catch((err) => {
        alert(`${err.response}`);
      });
  };

  const onRegistration = (e) => {
    e.preventDefault();
    stock(form);
  };

  return (
    <>
      <Layout>
        <Center>
          <Typography variant="h2" fontSize={19} sx={{ marginBottom: 1 }}>
            Veja o estoque do produto!
          </Typography>
          <form onSubmit={onRegistration}>
            <TextField
              name={"id"}
              value={form.id}
              onChange={onChangeForm}
              label={"ID do produto"}
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
              Ver Estoque
            </Button>
          </form>
          <h2>Estoque:</h2>
          {data}
        </Center>
      </Layout>
    </>
  );
}
