import { useLocation, useHistory } from "react-router-dom";

function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const skip = Number(query.get("skip")) || 0;
  const limit = Number(query.get("limit")) || 10;

  const handleNext = () => {
    query.set("skip", skip + limit);
    history.push({ search: query.toString() });
  };
  return (
    <div>
      <h1>Categories Page</h1>
      <h2>skip: {skip}</h2>
      <h2>limit: {limit}</h2>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default CategoriesPage;
