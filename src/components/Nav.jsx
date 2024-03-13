import { Form, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home page">
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Delete user and all data?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

Nav.propTypes = {
  userName: PropTypes.string,
};

export default Nav;
