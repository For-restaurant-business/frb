import { API_FILES } from "lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type MenuPositionCardProps = {
  image?: string;
  category: string;
  name: string;
  id: string;
};

const MenuPositionCard: FC<MenuPositionCardProps> = ({
  image,
  category,
  name,
  id,
}: MenuPositionCardProps) => {
  const imageSrc = image ? `${API_FILES}/menu_positions/${id}/${image}` : " ";
  return (
    <Link
      className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-800"
      href={"#"}
    >
      <div className="aspect-w-16 aspect-h-9 h-72 relative dark:text-white">
        <Image
          className="w-full object-cover rounded-t-xl"
          src={imageSrc}
          fill={true}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          alt={`Фото пункта меню: ${name}`}
          placeholder="blur"
          blurDataURL={`${API_FILES}/menu_positions/${id}/${image}?thumb=100x100`}
        />
      </div>
      <div className="p-4 md:p-5">
        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default MenuPositionCard;
