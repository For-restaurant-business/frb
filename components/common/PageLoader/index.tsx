import Loader from "components/common/Loader";

const PageLoader = () => {
  return (
    <div className="min-h-[15rem] flex-auto flex-col items-center p-4 md:p-5 flex justify-center">
      <Loader />
    </div>
  );
};

export default PageLoader;
