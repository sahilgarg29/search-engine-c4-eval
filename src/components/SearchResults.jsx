import ResultCard from "./ResultCard";

function SearchResults({ results }) {
  return (
    <div id="search-result">
      {results.map((result) => (
        <ResultCard result={result} key={result.id} />
      ))}
    </div>
  );
}

export default SearchResults;
