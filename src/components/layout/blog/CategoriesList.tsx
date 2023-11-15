"use client";

import { useQueryParams } from "@/hooks/useQueryParams";
import { Category } from "@/types";
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