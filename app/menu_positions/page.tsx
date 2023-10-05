import Image from "next/image";
//@ts-ignore
import("preline");

export const menu_positions = () => {
  const data: any = {
    name: "Салат с грейпфрутом",
  };
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      {/* <Image
        width={100}
        height={100}
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Image Description"
      /> */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Card title
        </h3>
        <p className="mt-1 text-gray-800 dark:text-gray-400">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          href="#"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default menu_positions;
