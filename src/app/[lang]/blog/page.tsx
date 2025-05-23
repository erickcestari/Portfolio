import { ArticlesList } from "@/components/layout/blog/ArticlesList";
import { CategoriesList } from "@/components/layout/blog/CategoriesList";
import ArticleTranslation from "@/components/layout/blog/ArticleTranslation";
import { categories } from "@/mdx-database/categories";
import { findAllArticles } from "@/mdx-database/findAllArticles";
import { getDictionary } from "@/dictionaries/getDictionary";

export const metadata = {
  title: "Blog | Erick",
  description: "Tech articles",
};

export default async function Blog({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string, lang: string }>;
  searchParams: Promise<{ categoriesParams: string | undefined }>;
}>) {
  const { lang } = await params;
  const { categoriesParams } = await searchParams;
  const { articles } = findAllArticles({
    categoriesQueryParams: categoriesParams,
  });
  const dic = await getDictionary(lang)

  return (
    <section className="flex flex-col gap-[2rem]">
      <div className="mt-5">
        <CategoriesList categoriesData={categories} />
      </div>

      <div className="flex flex-col gap-[1rem]">
        <div className="flex justify-between items-center">
          <ArticleTranslation dic={dic} />
        </div>
        <ArticlesList articlesData={articles} />
      </div>
    </section>
  );
}