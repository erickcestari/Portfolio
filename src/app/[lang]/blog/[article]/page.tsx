import { Metadata } from "next";
import { articles } from "@/mdx-database/articles";
import { findArticleByTitle } from "@/mdx-database/findArticleByTitle";
import { ArticleHero } from "@/components/layout/blog/article/ArticleHero";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { parseTitleHref } from "@/utils/parseTitleHref";
import { Summary } from "@/components/ui/Summary";

export default async function ArticlePage({
  params,
}: Readonly<{
  params: { article: string };
}>) {
  const { article } = findArticleByTitle(params.article);

  return (
    <section className="flex flex-col items-center">
      <ArticleHero article={article} />
      <div className="grid grid-cols-1">
        <ArticleBody articlePath={article.body} />
        <Summary articleTopics={article.topics} />
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { article: string };
}): Promise<Metadata> {
  const { article } = findArticleByTitle(params.article);
  return {
    title: article.title,
    description: article.brief,
    keywords: article.categories.map(({ title }) => title),
    twitter: {
      creator: "erick-cestari",
      creatorId: "erick-cestari",
      images: [`/cover/${article.body}.png`],
      title: "erick-cestari",
      description: article?.brief,
    },
    openGraph: {
      url: "https://erickcestari.vercel.app",
      images: [`/cover/${article.body}.png`],
      title: article.title,
      description: article.brief,
      type: "article",
      tags: article.categories.map(({ title }) => title),
    },
  };
}

export async function generateStaticParams() {
  return articles?.map((article) => ({
    article: parseTitleHref(article.title),
  }));
}