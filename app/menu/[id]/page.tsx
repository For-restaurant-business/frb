"use client";

import { FC, useEffect } from "react";
import { useMenuPositionsStore } from "../../../lib/store/menuPositions";

type MenuPositionsProps = {
  params: { id: string };
};

const MenuPositions: FC<MenuPositionsProps> = ({
  params,
}: MenuPositionsProps) => {
  const getMenuPositions = useMenuPositionsStore(
    (state) => state.getMenuPositions,
  );

  const menuPositions = useMenuPositionsStore((state) => state.menuPositions);

  useEffect(() => {
    getMenuPositions(params.id);
  }, [getMenuPositions, params.id]);
  return <div>123</div>;
};

export default MenuPositions;
