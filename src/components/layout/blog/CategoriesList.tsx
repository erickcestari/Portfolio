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
                ` 
                bg-secondary-foreground 
                text-secondary` : 
                `
                hover:bg-secondary-foreground
                hover:text-secondary 
                bg-primary-foreground 
                text-primary`}
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