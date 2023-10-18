"use client";
import { FC, useEffect, useState } from "react";
import { getMenuPositions } from "lib/api";
import { MenuPosition } from "lib/types";
import PageLoader from "components/common/PageLoader";
import { toast } from "react-toastify";
import MenuPositionCard from "components/MenuPosition/MenuPositionCard";
import ButtonAddMenuPosition from "components/MenuPosition/ButtonAddMenuPosition";

type MenuPositionsProps = {
  params: { id: string };
};

const MenuPositions: FC<MenuPositionsProps> = ({
  params: { id },
}: MenuPositionsProps) => {
  const [menuPositions, setMenuPositions] = useState<MenuPosition[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      getMenuPositions(id)
        .then(setMenuPositions)
        .then(() => setIsLoading(false));
    } catch (err) {
      toast.error("Что-то пошло не так, обновите страницу");
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <PageLoader />
  ) : (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid lg:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
      {menuPositions.map((e: MenuPosition) => (
        <MenuPositionCard
          key={e.id}
          id={e.id}
          name={e.name}
          image={e.image}
          category="какая-то категория"
        />
      ))}
      <ButtonAddMenuPosition />
    </div>
  );
};

export default MenuPositions;
