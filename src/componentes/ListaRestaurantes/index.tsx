import axios from "axios";
import { useEffect, useState } from "react";
import { IPagination } from "../../interfaces/IPagination";
import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    // obter restaurantes
    axios
      .get<IPagination<IRestaurant>>(`http://0.0.0.0:8000/api/v1/restaurantes/`)
      .then((response) => {
        setRestaurants(response.data.results);
        setNextPage(response.data.next);
      })
      .catch((error) => console.log(error));
  }, []);

  const viewMore = () => {
    axios
      .get<IPagination<IRestaurant>>(nextPage)
      .then((response) => {
        setRestaurants([...restaurants, ...response.data.results]);
        setNextPage(response.data.next);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurants?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {nextPage && <button onClick={viewMore}>Ver Mais</button>}
    </section>
  );
};

export default ListaRestaurantes;
