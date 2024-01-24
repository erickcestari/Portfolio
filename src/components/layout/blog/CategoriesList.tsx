"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { Category } from "@/types/Category";
import { useSearchParams } from "next/navigation";

interface CategoriesListProps {
  categoriesData: Category[];
}

export const CategoriesList = ({ categoriesData }: CategoriesListProps) => {
  const { handleParamValue } = useQueryParams({ paramName: "categories" });
  const searchParamsHook = useSearchParams();

  return (
    <div>
      {categoriesData?.length ? (
        <div className="flex flex-wrap gap-3">
          {categoriesData?.map(({ id, title }) => {
            return (
              <button
                key={id}
                onClick={() => handleParamValue(title)}
                className={`
                p-2
                rounded-md
                transition-colors
                ${searchParamsHook.get("categories")?.split(",").some((category: string) => category === title) ? 
                `dark:bg-zinc-800 
                dark:text-zinc-300 
                bg-zinc-300 
                text-zinc-800` : 
                `dark:hover:bg-zinc-800 
                dark:hover:text-zinc-300
                dark:bg-zinc-300
                dark:text-zinc-800 
                hover:bg-zinc-300
                hover:text-zinc-800 
                bg-zinc-800 
                text-zinc-300`}
              `}
              >
                {title}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};