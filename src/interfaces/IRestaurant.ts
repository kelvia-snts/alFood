import IPrato from "./IPrato";

export default interface IRestaurant {
  id: number;
  nome: string;
  pratos: IPrato[];
}
