import { useSearchParams } from "next/navigation";

export const UseGetParams = (name: string) => {
  const searchParams = useSearchParams();
  return searchParams.get(name)?.toString();
};
