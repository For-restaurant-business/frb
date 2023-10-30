import { usePathname } from "next/navigation";

export const useUrlHelper = () => {
  const pathname = usePathname();
  const getPageChain = (chainPosition: number): string => {
    const pageChain = pathname.split("/")[chainPosition];

    return pageChain;
  };

  const isActivePage = (page: string): boolean => {
    const currentPage = getPageChain(1);

    return currentPage === page;
  };

  return { getPageChain, isActivePage };
};
