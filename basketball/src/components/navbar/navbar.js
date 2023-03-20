import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/Schedule">Schedule/Results</CustomLink>
        <CustomLink to="/Teams">Teams</CustomLink>
        <CustomLink to="/Standings">Standings</CustomLink>
        <CustomLink to="/News">News</CustomLink>
        <CustomLink to="/Youth">Youth Info</CustomLink>
        <CustomLink to="/Offseason">Offseason Info</CustomLink>
        <CustomLink to="/History">History/Records</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
