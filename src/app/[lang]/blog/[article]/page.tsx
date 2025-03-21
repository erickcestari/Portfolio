import { Metadata } from "next";
import { articles } from "@/mdx-database/articles";
import { findArticleByTitle } from "@/mdx-database/findArticleByTitle";
import { ArticleHero } from "@/components/layout/blog/article/ArticleHero";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { parseTitleHref } from "@/utils/parseTitleHref";
import { Summary } from "@/components/ui/Summary";
import { DOMAIN } from "@/utils/domain";

type Params = Promise<{ article: string }>

export async function generateStaticParams() {
  return articles?.map((article) => ({
    title: parseTitleHref(article.title),
  }));
}

export default async function ArticlePage({
  params,
}: { params: Params }) {
  const { article } = await params;
  const { article: _article } = findArticleByTitle(article);

  return (
    <section className="flex flex-col items-center">
      <ArticleHero article={_article} />
      <div className="grid grid-cols-1 w-full">
        <ArticleBody articlePath={_article.body} />
        <Summary articleTopics={_article.topics} />
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { article } = await params
  const { article: _article } = findArticleByTitle(article);
  return {
    title: _article.title,
    description: _article.brief,
    keywords: _article.categories.map(({ title }) => title),
    twitter: {
      creator: "erick-cestari",
      creatorId: "erick-cestari",
      images: [`/cover/${_article.body}.png`],
      title: "erick-cestari",
      description: _article?.brief,
    },
    openGraph: {
      url: DOMAIN,
      images: [`/cover/${_article.body}.png`],
      title: _article.title,
      description: _article.brief,
      type: "article",
      tags: _article.categories.map(({ title }) => title),
    },
  };
}