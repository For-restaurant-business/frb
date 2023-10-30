"use client";
import Button, { EButtonTheme } from "components/common/Button";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { User } from "lib/types";
import Image from "next/image";
import { API_FILES } from "lib/constants";
import UserIcon from "assets/icons/UserIcon.svg";

const ProfilePhoto = ({ user }: { user: User }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="relative inline-flex [--placement:bottom-right]">
      <Button
        onClick={() => setIsDropdownVisible(true)}
        theme={EButtonTheme.ROUNDED}
      >
        {user.avatar ? (
          <Image
            className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
            src={`${API_FILES}/users/${user.id}/${user.avatar}`}
            width={38}
            height={38}
            priority={true}
            alt={`Фото пункта меню: ${name}`}
          />
        ) : (
          <UserIcon className="h-5 w-5" />
        )}
      </Button>
      <Dropdown
        email={user.email}
        isVisible={isDropdownVisible}
        closeDropdown={() => setIsDropdownVisible(false)}
      />
    </div>
  );
};

export default ProfilePhoto;
