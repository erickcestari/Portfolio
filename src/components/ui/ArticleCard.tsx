import React from "react";
import Link from "next/link";
import { Article } from "@/types";
import { formatDate } from "@/utils/formatDate";
import { parseTitleHref } from "@/utils/parseTitleHref";

export interface ArticleCardProps extends Omit<Article, "body"> {}

export const ArticleCard = ({
  title,
  brief,
  categories,
  updatedAt,
}: ArticleCardProps) => {
  const hrefTitle = parseTitleHref(title);

  return (
    <Link href={`/blog/${hrefTitle}`} role="link">
      <button
        role="listitem"
        className="h-[19rem] w-full p-[1.25rem] text-left flex flex-col gap-[0.75rem] rounded-[1rem] bg-background2"
      >
        <h2>{title}</h2>

        <div className="flex gap-x-3 gap-y-2 flex-wrap">
          {categories.map(({ id, title }) => (
            <span
              className={`size: "small", variant: "outline"`}
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
          <span className="text-text2 text-sm">{formatDate(updatedAt)}</span>
        </div>
      </button>
    </Link>
  );
};