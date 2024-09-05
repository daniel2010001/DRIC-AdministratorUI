import { SearchIcon } from "@/assets/Icons";

const Search = ({
  className,
  searchFunction,
  width,
  height,
}) => {
  return (
    <div className={`buscador ${className}`}>
      <div className={`relative`}>
        <span className="absolute inset-y-0 flex items-center ps-2 pointer-events-none">
          <SearchIcon />
        </span>
        <input
          onChange={searchFunction}
          type="search"
          id="default-search"
          className={`${height} ${width} p-1 ps-8 text-xs sm:text-[12px] md:text-sm xl:text-sm placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
        />
      </div>
    </div>
  );
};

export default Search;
