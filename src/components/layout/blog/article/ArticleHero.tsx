import { Article } from "@/types/Article";
import { formatDate } from "@/utils/formatDate";

interface ArticleHeroProps {
  article: Article;
}
export const ArticleHero = ({ article }: ArticleHeroProps) => {
  return (
    <div className="w-full pt-[5rem] flex flex-col gap-[2.5rem] items-center justify-between border-b border-text2">
      <div className="w-full flex flex-col">
        <h1>{article.title}</h1>
        <div className="flex gap-[1rem] flex-wrap">
          {article.categories.map(({ id, title }) => (
            <span
              key={id}
            >
              {title}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between text-right">
        <b className="text-lg text-text2 text-medium">
          {formatDate(article.updatedAt)}
        </b>
      </div>
    </div>
  );
};
