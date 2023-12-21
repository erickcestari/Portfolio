import { ArticlesList } from "@/components/layout/blog/ArticlesList";
import { CategoriesList } from "@/components/layout/blog/CategoriesList";
import ArticleTranslation from "@/components/layout/blog/ArticleTranslation";
import { categories } from "@/mdx-database/categories";
import { findAllArticles } from "@/mdx-database/findAllArticles";

export const metadata = {
  title: "Blog | Erick",
  description: "Tech articles",
};

export default async function Blog({
  params,
  searchParams,
}: Readonly<{
  params: { slug: string };
  searchParams: { categories: string | undefined };
}>) {
  const { articles } = findAllArticles({
    categoriesQueryParams: searchParams.categories,
  });

  return (
    <section className="flex flex-col gap-[2rem]">
      <CategoriesList categoriesData={categories} />

      <div className="flex flex-col gap-[1rem]">
        <div className="flex justify-between items-center">
          <ArticleTranslation />
        </div>
        <ArticlesList articlesData={articles} />
      </div>
    </section>
  );
}