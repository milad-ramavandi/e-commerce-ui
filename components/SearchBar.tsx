import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden sm:flex sm:items-center sm:gap-2 sm:rounded-md sm:ring-1 sm:ring-gray-200 sm:px-2 sm:py-1 sm:shadow-md">
      <Search className="w-4 h-4 text-gray-400" />
      <input type="search" id="search" placeholder="Search..." className="text-sm outline-0" />
    </div>
  );
};

export default SearchBar;
