import { FC } from "react";
import { getMenuPositions } from "lib/api";
import ButtonAddMenuPosition from "components/MenuPositions/ButtonAddMenuPosition";
import MenuPositions from "components/MenuPositions";

type MenuPositionsProps = {
  params: { id: string };
};

const MenuPosition: FC<MenuPositionsProps> = async ({
  params: { id },
}: MenuPositionsProps) => {
  const initialMenuPositions = await getMenuPositions(id);
  return (
    <div className="grid lg:auto-rows-fr 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mb-10 lg:mb-14">
      <MenuPositions initialMenuPositions={initialMenuPositions} id={id} />
      <ButtonAddMenuPosition />
    </div>
  );
};

export default MenuPosition;
