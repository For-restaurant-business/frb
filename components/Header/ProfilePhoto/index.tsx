"use client";
import Button, { EButtonTheme } from "components/common/Button";
import { useState } from "react";
import Dropdown from "./Dropdown";

const ProfilePhoto = ({ email }: { email?: string }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="relative inline-flex [--placement:bottom-right]">
      <Button
        onClick={() => setIsDropdownVisible(true)}
        theme={EButtonTheme.ROUNDED}
      >
        {/* TODO вывести фото из профиля */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Image Description"
        />
      </Button>
      <Dropdown
        email={email}
        isVisible={isDropdownVisible}
        closeDropdown={() => setIsDropdownVisible(false)}
      />
    </div>
  );
};

export default ProfilePhoto;
