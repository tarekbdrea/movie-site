import "./SearchBar.css";

function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search-bar">
      <label className="search-bar__field search-bar__field--grow">
        <span className="search-bar__label">חיפוש</span>
        <input
          className="search-bar__input"
          type="text"
          placeholder="שם הסרט..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
        />
      </label>

      ...
    </div>
  );
}

export default SearchBar;