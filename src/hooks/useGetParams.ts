import { useSearchParams } from "next/navigation";

export const useGetParams = (name: string) => {
  const searchParams = useSearchParams();
  return searchParams.get(name)?.toString();
};
