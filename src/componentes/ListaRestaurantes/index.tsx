import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPagination } from "../../interfaces/IPagination";
import IRestaurant from "../../interfaces/IRestaurant";
import style from "./ListaRestaurantes.module.scss";
import Restaurant from "./Restaurant";

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const loadDatas = (url: string) => {
    axios
      .get<IPagination<IRestaurant>>(url)
      .then((response) => {
        setRestaurants(response.data.results);
        setNextPage(response.data.next);
        setPreviousPage(response.data.previus);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // obter restaurantes
    loadDatas(`http://0.0.0.0:8000/api/v1/restaurantes/`);
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
        <Restaurant restaurant={item} key={item.id} />
      ))}
      <Button onClick={() => loadDatas(previousPage)} disabled={!previousPage}>
        Página Anterior
      </Button>
      <Button onClick={() => loadDatas(nextPage)} disabled={!nextPage}>
        Próxima Página
      </Button>
    </section>
  );
};

export default ListaRestaurantes;
