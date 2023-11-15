"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Article } from "@/types";

interface ArticlesListProps {
  articlesData: Article[];
}
export const ArticlesList = ({ articlesData }: ArticlesListProps) => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[1rem]">
      {articlesData?.map(({ ...article }) => (
        <AnimatePresence key={article.id}>
          <motion.div
            key={article.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ y: -5 }}
            style={{ zIndex: `${article.id + 1}` }}
          >
            <ArticleCard {...article} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};