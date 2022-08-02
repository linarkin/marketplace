import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <h2>404 Not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
export default NotFound;
