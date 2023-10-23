import { usePathname } from "next/navigation";

export const useUrlHelper = () => {
  const pathname = usePathname();
  const getPageChain = (chainPosition: number) => {
    const pageChain = pathname.split("/")[chainPosition];

    return pageChain;
  };

  return { getPageChain };
};
