import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import SearchResults from "../components/SearchResults";
import { fetchResults } from "../redux/actions";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const results = useSelector((store) => store.results);

  useEffect(() => {
    dispatch(fetchResults(searchParams.get("q")));
  }, [searchParams]);

  useEffect(() => {
    console.log(results);
  });

  return (
    <div>
      <Navigation setParams={setSearchParams} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;
