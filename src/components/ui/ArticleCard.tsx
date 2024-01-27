import React from "react";
import Link from "next/link";
import { Article } from "@/types/Article";
import { parseTitleHref } from "@/utils/parseTitleHref";
import FormatDate from "./FormatDate";

export interface ArticleCardProps extends Omit<Article, "body"> {}

export const ArticleCard = ({
  title,
  brief,
  categories,
  updatedAt,
  language,
}: ArticleCardProps) => {
  const hrefTitle = parseTitleHref(title);

  return (
    <Link href={`/blog/${hrefTitle}`}>
      <li
        className="h-[16rem] w-full p-[1.25rem] text-left flex flex-col gap-[0.75rem] rounded-[1rem] 
        transition-colors
        bg-secondary
        hover:bg-primary-foreground
        "
      >
        <h2 className="text-2xl">{title}</h2>

        <div className="flex gap-x-3 gap-y-2 flex-wrap">
          {categories.map(({ id, title }) => (
            <span
              className={`
              p-1
              rounded-md
              border-2
              border-primary
              `}
              key={id}
            >
              {title}
            </span>
          ))}
        </div>

        <p className="h-full w-full overflow-hidden text-ellipsis line-clamp-5">
          {brief}
        </p>

        <div className="w-full flex items-center justify-between">
          <span className="text-sm"><FormatDate date={updatedAt} language={language}/></span>
          <span className="text-sm">{language.toLocaleUpperCase()}</span>
        </div>
      </li>
    </Link>
  );
};