import IDishes from "../../../interfaces/IDishes";
import estilos from "./Prato.module.scss";

interface PratoProps {
  dishe: IDishes;
}

const Dishe = ({ dishe }: PratoProps) => {
  return (
    <div className={estilos.Prato}>
      <div className={estilos.Container}>
        <div>
          <div className={estilos.EfeitoTorcao}>
            <img src={dishe.image} alt={dishe.description} />
          </div>
        </div>
      </div>
      <div className={estilos.Conteudo}>
        <h3>{dishe.name}</h3>
        <div className={estilos.Tag}>{dishe.tag}</div>
        <div>{dishe.description}</div>
      </div>
    </div>
  );
};

export default Dishe;
