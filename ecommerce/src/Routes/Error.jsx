import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { ErrorStyle } from "../Styles/Error";

const ErrorPage = () => {
  return (
    <ErrorStyle>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </ErrorStyle>
  );
};


export default ErrorPage;