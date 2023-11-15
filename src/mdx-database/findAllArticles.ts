import { notFound } from "next/navigation";
import { Article } from "@/types";
import { articles } from "./articles";

interface FindAllArticlesProps {
  categoriesQueryParams?: string;
  size?: number;
}

export const findAllArticles = ({
  categoriesQueryParams,
  size,
}: FindAllArticlesProps): { articles: Article[] } => {
  const searchParamsValues = categoriesQueryParams?.split(",").slice(1) ?? [];

  //asc sort by updatedAt
  articles.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  //size limit
  if (size && articles.length >= size)
    return { articles: articles.slice(size) };

  //filter by category
  if (searchParamsValues?.length > 0) {
    const filteredArticles = articles.filter((item) => {
      return searchParamsValues?.some((param) =>
        item.categories?.some((category) => category.title === param)
      );
    });

    if (filteredArticles.length === 0) return notFound();

    return { articles: filteredArticles };
  }

  return { articles };
};