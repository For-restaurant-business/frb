"use client";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "components/common/PageLoader";
import { getMenuPositions } from "lib/api";
import { MenuPosition } from "lib/types";
import { toast } from "react-toastify";
import MenuPositionCard from "./MenuPositionCard";

type MenuPositionsProps = {
  initialMenuPositions: MenuPosition[];
  id: string;
};

const MenuPositions = ({ initialMenuPositions, id }: MenuPositionsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["menuPositions", id],
    queryFn: () => getMenuPositions(id),
    enabled: !!id,
    initialData: initialMenuPositions,
  });

  if (error) {
    toast.error("Что-то пошло не так, обновите страницу");
    return;
  }

  return isLoading ? (
    <PageLoader />
  ) : (
    data?.map((e) => (
      <MenuPositionCard
        key={e.id}
        id={e.id}
        name={e.name}
        image={e.image}
        category="какая-то категория"
      />
    ))
  );
};

export default MenuPositions;
