"use client";
import { useHashParams } from "@/hooks/useHashParams";
import { parseTitleHref } from "@/utils/parseTitleHref";
import { DocumentIcon } from "@heroicons/react/20/solid";
import { cx } from "class-variance-authority";

interface SummaryProps {
  articleTopics: string[];
}

export const Summary = ({ articleTopics }: SummaryProps) => {
  const { currentHash } = useHashParams();

  return (
    <aside className="hidden laptop:flex relative w-72 h-full flex-col gap-[2rem]">
      <nav className="sticky top-[4rem] flex flex-col gap-[2rem]">
        <h2 className="text-text2">Sumário</h2>
        <ul className="flex flex-col gap-[1rem]">
          {articleTopics.map((title) => (
            <li
              key={title}
              className="text-md text-text2 flex items-center gap-[1rem]"
            >
              <span
                className={cx(
                  "no-underline font-normal transition duration-500",
                  currentHash === `#${parseTitleHref(title)}`
                    ? "text-attention"
                    : "text-text1"
                )}
              >
                <DocumentIcon className="h-5 w-5" />
              </span>
              <a
                href={`#${parseTitleHref(title)}`}
                className={cx(
                  "no-underline font-normal transition hover:text-attention",
                  currentHash === `#${parseTitleHref(title)}`
                    ? "text-attention"
                    : "text-text1"
                )}
              >
                <button className="text-left">{title}</button>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
