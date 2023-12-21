import { Category } from "./Category";
import { Language } from "./Language";

export type Article = {
  id: number;
  title: string;
  topics: string[];
  body: string;
  brief: string;
  categories: Category[];
  language: Language;
  createdAt: string;
  updatedAt: string;
};