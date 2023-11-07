import { Link, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <div>
        <Link to="/">Navigate to Home Page</Link>
      </div>
      <div>
        <Link to="/hello">Navigate to Hello Page</Link>
      </div>
      <div>
        <Link to="/about">Navigate to About Page</Link>
      </div>

      <Outlet />
    </>
  );
}
