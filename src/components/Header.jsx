import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  margin: "1 rem 0",
  fontWeight: isActive ? "600" : "400",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "red" : ""
});

export const Header = () => {
  return (
    <>
      <div>
        <h1>Todos</h1>
        <nav>
          <NavLink style={getActiveStyle} to="/">
            Home
          </NavLink>
          <NavLink style={getActiveStyle} to="/donetodo">
            Done Todo
          </NavLink>
          <NavLink style={getActiveStyle} to="/opentodo">
            Open Todo
          </NavLink>
        </nav>
      </div>
    </>
  );
};
