import { Button } from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { IPagination } from "../../interfaces/IPagination";
import IRestaurant from "../../interfaces/IRestaurant";
import ISearchParameters from "../../interfaces/ISearchParameters";
import style from "./ListaRestaurantes.module.scss";
import Restaurant from "./Restaurant";

const ListaRestaurantes = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const [search, setSearch] = useState("");

  const loadDatas = (url: string, options: AxiosRequestConfig = {}) => {
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

  const seek = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      params: {} as ISearchParameters,
    };
    if (search) {
      options.params.search = search;
    }
    loadDatas(`http://localhost:8000/api/v1/restaurantes/`, options);
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
      <form onSubmit={seek}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
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
