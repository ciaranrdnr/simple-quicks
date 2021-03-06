import { ReactComponent as IconSearch } from "../../assets/icons/search.svg";
const SearchBar = (props) => {
  return (
    <form className="searchform">
      <input placeholder={props.ph} className="searchBar" type="text" />
      <button>
        <IconSearch />
      </button>
    </form>
  );
};
export default SearchBar;
