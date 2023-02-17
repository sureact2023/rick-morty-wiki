import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }: any) => {
  return (
    <div>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
