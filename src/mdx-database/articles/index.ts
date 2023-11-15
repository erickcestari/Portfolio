import { Article } from "@/types/Article";
import { categories } from "../categories";

export const articles: Article[] = [
  {
    id: 1,
    title: "Meu primeiro artigo",
    brief:
      "Neste Meu primeiro artigo 🦀",
    categories: [
      categories.find(({ title }) => title === "Javascript")!,
      categories.find(({ title }) => title === "ReactJS")!,
    ],
    topics: [
      "Meu primeiro artigo",
    ],
    body: `my-mdx`,
    createdAt: "2023-11-15",
    updatedAt: "2023-11-15",
  },
];