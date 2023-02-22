import IPratos from "./IDishes";

export default interface IRestaurant {
  id: number;
  nome: string;
  pratos: IPratos[];
}
