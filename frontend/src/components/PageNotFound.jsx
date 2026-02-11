import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="container">
      <div className="row text-center" style={{ margin: "auto" }}>
        <h1 className="mt-5">404</h1>
        <p>Page Not Found</p>
        <p
          className="p-2 fs-5 mb-5"
          style={{ width: "40%", margin: "0 auto" }}
        >
          We couldn’t find the page you were looking for.
          <Link to={"/"}> Visit Zerodha’s home page </Link>
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
