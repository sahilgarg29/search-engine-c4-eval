import { Link } from "react-router-dom";

function ResultCard({ result }) {
  return (
    <div id="result">
      <p>{result.url}</p>
      <h3>
        <Link to={`/page/${result.id}`}>{result.title}</Link>
      </h3>
      <p>Author - {result.author}</p>
      <p>Description - {result.description}</p>
      <p>Explicit - {result.explicit.toString()}</p>
      <p>Date - {new Date(Number(result.creation_date)).toString()}</p>
      <p>Quality - {result.quality}</p>
      <hr />
    </div>
  );
}

export default ResultCard;
