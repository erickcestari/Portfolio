import { createUrl } from "@/utils/createUrl";
import { useRouter, useSearchParams } from "next/navigation";

interface UseQueryParamsProps {
  paramName: string;
}

export const useQueryParams = ({ paramName }: UseQueryParamsProps) => {
  const searchParamsHook = useSearchParams();
  const router = useRouter();

  const handleParamValue = (paramValue: string) => {
    const searchParams = new URLSearchParams(searchParamsHook.toString());

    const currentValues = (searchParams.get(paramName) ?? "").split(",");
    const existsIndex = currentValues.indexOf(paramValue);

    if (existsIndex === -1) {
      currentValues.push(paramValue);
    } else {
      currentValues.splice(existsIndex, 1);
    }

    if (currentValues.length === 1) {
      searchParams.delete(paramName);
    } else {
      searchParams.set(paramName, currentValues.join(","));
    }

    router.push(createUrl("/blog", searchParams));
  };

  return {
    handleParamValue,
  };
};