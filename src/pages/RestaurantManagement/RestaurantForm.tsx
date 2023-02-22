import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const RestaurantForm = () => {
  const [restaurantName, setRestaurantName] = useState("");

  const whenSubmittingForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("http://0.0.0.0:8000/api/v2/restaurantes/", {
        nome: restaurantName,
      })
      .then(() => alert("Sucesso"));
  };

  return (
    <form onSubmit={whenSubmittingForm}>
      <TextField
        value={restaurantName}
        onChange={(event) => setRestaurantName(event.target.value)}
        label="Nome do Restaurante"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default RestaurantForm;
