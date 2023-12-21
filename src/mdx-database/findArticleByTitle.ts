import { parseTitleHref } from "@/utils/parseTitleHref";
import { articles } from "./articles";
import { notFound } from "next/navigation";

export const findArticleByTitle = (title: string) => {
  const article = articles.find(
    (article) => parseTitleHref(article.title) === title
  );

  if (!article) return notFound();

  return { article };
};