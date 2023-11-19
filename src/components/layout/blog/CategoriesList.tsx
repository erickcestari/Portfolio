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
        <div className="flex flex-wrap gap-3  mt-10">
          {categoriesData?.map(({ id, title }) => {
            return (
              <button
                key={id}
                onClick={() => handleParamValue(title)}
                className={`
                hover:invert
                dark:bg-zinc-300
                dark:text-zinc-800 
                bg-zinc-800 
                text-zinc-300
                p-2
                rounded-md
                ${searchParamsHook.get("categories")?.split(",").some((category: string) => category === title) ? "invert" : null}
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