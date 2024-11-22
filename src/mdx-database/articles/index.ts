import { Article } from "@/types/Article";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "1 é Igual a 0.99...?",
    brief:
      "Explorando a fascinante equivalência entre 0.99... e 1 na matemática",
    categories: [
      categories.find(({ title }) => title === "Portuguese")!,
      categories.find(({ title }) => title === "Mathematics")!
    ],
    topics: [
      "Meu primeiro artigo",
    ],
    language: "pt",
    body: `0.99-igual-a-1`,
    createdAt: "2024-01-28",
    updatedAt: "2024-01-28",
  },
  {
    id: 1,
    title: "Mining Bitcoin",
    brief:
      "Explaining the process of mining Bitcoin and how it works",
    categories: [
      categories.find(({ title }) => title === "English")!,
      categories.find(({ title }) => title === "Bitcoin")!,
      categories.find(({ title }) => title === "Cryptocurrency")!,
      categories.find(({ title }) => title === "Blockchain")!
    ],
    topics: [
      "Mining",
    ],
    language: "en",
    body: `mining-bitcoin`,
    createdAt: "2024-12-21",
    updatedAt: "2024-12-21",
  },
];
