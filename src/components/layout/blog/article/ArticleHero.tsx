import { Article } from "@/types/Article";
import { formatDate } from "@/utils/formatDate";

interface ArticleHeroProps {
  article: Article;
}
export const ArticleHero = ({ article }: ArticleHeroProps) => {
  return (
    <div className="w-full pt-[2rem] flex flex-col gap-[2.5rem] items-center justify-between border-b dark:border-white border-black">
      <div className="w-full flex flex-col">
        <h1 className="text-2xl">{article.title}</h1>
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
        <b className="text-base">
          {formatDate(article.updatedAt, article.language)}
        </b>
      </div>
    </div>
  );
};
