import IRestaurant from "../../../interfaces/IRestaurant";
import Prato from "../Prato";
import estilos from "./Restaurante.module.scss";

interface RestauranteProps {
  restaurante: IRestaurant;
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  return (
    <section className={estilos.Restaurante}>
      <div className={estilos.Titulo}>
        <h2>{restaurante.nome}</h2>
      </div>
      <div>
        {restaurante.pratos?.map((item) => (
          <Prato prato={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Restaurante;