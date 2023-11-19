import { ArticlesList } from "@/components/layout/blog/ArticlesList";
import { CategoriesList } from "@/components/layout/blog/CategoriesList";
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
          <h2 className="text-2xl">Articles</h2>
          <span className="text-lg">{articles?.length} {articles?.length > 1 ? "articles" : "article"}</span>
        </div>
        <ArticlesList articlesData={articles} />
      </div>
    </section>
  );
}