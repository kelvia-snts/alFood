import IRestaurant from "../../../interfaces/IRestaurant";
import estilos from "./Restaurante.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import IDishes from "../../../interfaces/IDishes";
import Dishe from "../Dishe";

interface RestaurantProps {
  restaurant: IRestaurant;
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const [dishes, setDishes] = useState<IDishes[]>();

  useEffect(() => {
    axios
      .get<IDishes[]>(
        `http://0.0.0.0:8000/api/v1/restaurantes/${restaurant.id}/pratos/`
      )
      .then((response) => {
        setDishes(response.data);
      });
  }, [restaurant.id]);

  return (
    <section className={estilos.Restaurant}>
      <div className={estilos.Titulo}>
        <h2>{restaurant.nome}</h2>
      </div>
      <div>
        {dishes?.map((item) => (
          <Dishe dishe={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Restaurant;
