import { FC } from "react";
import MenuItem from "./MenuItem";
import Profile from "assets/icons/Profile.svg";
import SignOut from "assets/icons/SignOut.svg";
import Button from "components/common/Button";
import { logout } from "lib/api/auth";

const Menu: FC = () => {
  return (
    <div className="mt-2 py-2 first:pt-0 last:pb-0">
      <MenuItem href="/profile" Icon={Profile}>
        Профиль
      </MenuItem>
      <Button
        onClick={logout}
        className="flex items-left gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 w-full"
      >
        <SignOut />
        Выйти
      </Button>
    </div>
  );
};

export default Menu;
