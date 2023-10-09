import Input from "components/common/Input";
import SearchIcon from "assets/icons/Search.svg";

const Search = () => {
  return (
    <Input
      name="search"
      placeholder="Search"
      label="Search"
      Icon={SearchIcon}
    />
  );
};

export default Search;
