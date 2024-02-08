import { Link, Outlet } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <div className="menu-container">
        <Link to="/">App</Link>
        <Link to="/map">Map</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/currency">Currency</Link>
        <Link to="/vacation">Vacation</Link>
      </div>

      <Outlet />
    </>
  );
}
