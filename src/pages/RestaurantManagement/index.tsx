import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import IRestaurant from "../../interfaces/IRestaurant";
import axios from "axios";

const RestaurantManagement = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurant[]>("http://0.0.0.0:8000/api/v2/restaurantes/")
      .then((response) => {
        setRestaurants(response.data);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map(({ id, nome }) => (
            <TableRow key={id}>
              <TableCell>{nome}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantManagement;
