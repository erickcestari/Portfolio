"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Article } from "@/types/Article";
import FadeInMotion from "@/components/animation/FadeInMotion";

interface ArticlesListProps {
  articlesData: Article[];
}
export const ArticlesList = ({ articlesData }: ArticlesListProps) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[1rem]">
      {articlesData?.map(({ ...article }) => (
        <AnimatePresence key={article.id}>
          <FadeInMotion key={article.id} props={{layout: true}}>
            <ArticleCard {...article} />
          </FadeInMotion>
        </AnimatePresence>
      ))}
    </div>
  );
};