import { Category } from "./Category";

export type Article = {
  id: number;
  title: string;
  topics: string[];
  body: string;
  brief: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};