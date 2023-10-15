import { FC } from "react";
import { getMenuPositions } from "lib/api";

type MenuPositionsProps = {
  params: { id: string };
};

const MenuPositions: FC<MenuPositionsProps> = async ({
  params,
}: MenuPositionsProps) => {
  const menuPositions = await getMenuPositions(params.id);
  console.log(menuPositions);

  return <div>123</div>;
};

export default MenuPositions;
