import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterExplicit,
  sortByDATEASC,
  sortByDateDESC,
  sortByQualityASC,
  sortByQualityDESC,
  sortByTitleASC,
  sortByTitleDESC,
} from "../redux/actions";

function Navigation({ setParams }) {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setParams({ q: search });
  };

  return (
    <div id="navbar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" value="Search" className="search" />
      </form>
      <div>
        <button
          onClick={() => dispatch(sortByTitleASC())}
          id="sort-alphabetically"
        >
          Sort A-Z
        </button>
        <button
          onClick={() => dispatch(sortByTitleDESC())}
          id="sort-alphabetically-desc"
        >
          Sort Z-A
        </button>
        <button onClick={() => dispatch(sortByDATEASC())} id="sort-by-date">
          sort by Date (Asc)
        </button>
        <button
          onClick={() => dispatch(sortByDateDESC())}
          id="sort-by-date-desc"
        >
          Sort by Date (Desc)
        </button>
        <button
          onClick={() => dispatch(sortByQualityASC())}
          id="sort-by-quality"
        >
          Sort by quality (Asc)
        </button>
        <button
          onClick={() => dispatch(sortByQualityDESC())}
          id="sort-by-quality-desc"
        >
          Sort By Quality(desc)
        </button>
        <button onClick={() => dispatch(filterExplicit())} id="filter-explicit">
          Filter explicit
        </button>
      </div>
    </div>
  );
}

export default Navigation;
