import { Link, Outlet } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <div className="menu-container">
        <Link to="/elements">HTML Elements</Link>
        <Link to="/selectors">Selectors</Link>
        <Link to="/units">Units</Link>
        <Link to="/margin-padding">Margin vs. Padding</Link>
        <Link to="/z-index">Z-Index</Link>
        <Link to="/flexbox">Flexbox</Link>
      </div>

      <Outlet />
    </>
  );
}
