import dynamic from "next/dynamic";

interface ArticleBodyProps {
  articlePath: string;
}
export const ArticleBody = ({ articlePath }: ArticleBodyProps) => {
  const Body = dynamic(
    () => import(`../../mdx-database/articles/${articlePath}.mdx`)
  );

  return (
    <article className="article-body">
      <Body />
    </article>
  );
};
