"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Article } from "@/types/Article";
import FadeIn from "@/components/animation/FadeIn";

interface ArticlesListProps {
  articlesData: Article[];
}
export const ArticlesList = ({ articlesData }: ArticlesListProps) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[1rem]">
      {articlesData?.map(({ ...article }) => (
        <AnimatePresence key={article.id}>
          <FadeIn key={article.id}>
            <ArticleCard {...article} />
          </FadeIn>
        </AnimatePresence>
      ))}
    </div>
  );
};