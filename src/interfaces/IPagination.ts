export interface IPagination<T> {
  count: number;
  next: string;
  previus: string;
  results: T[];
}
