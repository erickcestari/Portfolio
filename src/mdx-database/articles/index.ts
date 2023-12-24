import { Article } from "@/types/Article";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "0.999... é Realmente Igual a 1?",
    brief:
      "Explorando a fascinante equivalência entre 0.999... e 1 na matemática",
    categories: [
      categories.find(({ title }) => title === "Portuguese")!,
      categories.find(({ title }) => title === "Mathematics")!
    ],
    topics: [
      "Meu primeiro artigo",
    ],
    language: "pt-br",
    body: `0.999-igual-a-1`,
    createdAt: "2023-12-24",
    updatedAt: "2023-12-24",
  },
];
