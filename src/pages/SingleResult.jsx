import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function SingleResult() {
  const { id } = useParams();

  const result = useSelector((store) => {
    let res = store.results.filter((e) => {
      return e.id.toString() === id.toString();
    });

    return res[0];
  });

  return (
    <div>
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

export default SingleResult;
