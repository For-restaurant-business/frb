import { FC } from "react";
import MenuItem from "./MenuItem";
import Profile from "assets/icons/Profile.svg";
import SignOut from "assets/icons/SignOut.svg";

const Menu: FC = () => {
  return (
    <div className="mt-2 py-2 first:pt-0 last:pb-0">
      <MenuItem href="/profile" Icon={Profile}>
        Профиль
      </MenuItem>
      <MenuItem href="/profile" Icon={SignOut}>
        Выйти
      </MenuItem>
    </div>
  );
};

export default Menu;
