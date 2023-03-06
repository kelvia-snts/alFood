import {
  Button,
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
import { Link } from "react-router-dom";

const RestaurantManagement = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  useEffect(() => {
    axios
      .get<IRestaurant[]>("http://0.0.0.0:8000/api/v2/restaurantes/")
      .then((response) => {
        setRestaurants(response.data);
      });
  }, []);

  const deleteRestaurant = (restaurantToBeDeleted: IRestaurant) => {
    axios
      .delete(
        `http://0.0.0.0:8000/api/v2/restaurantes/${restaurantToBeDeleted.id}/`
      )
      .then((responde) => {
        const restaurantsList = restaurants.filter(
          (restaurant) => restaurant.id !== restaurantToBeDeleted.id
        );
        setRestaurants([...restaurantsList]);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell>{restaurant.nome}</TableCell>
              <TableCell>
                [<Link to={`/admin/restaurantes/${restaurant.id}`}>editar</Link>
                ]
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteRestaurant(restaurant)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantManagement;
