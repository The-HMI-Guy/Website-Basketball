import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleTeamSelect = (event) => {
    const team = event.target.value;
    if (team) {
      navigate(`/Teams/${team}`);
    }
  };
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/Schedule">Schedule/Results</CustomLink>
        <li className="dropdown">
          <CustomLink to="/Teams">Teams</CustomLink>
          <div className="dropdown-menu">
            <Link to="/Teams/Varsity" className="dropdown-item">
              Varsity
            </Link>
            <Link to="/Teams/Junior Varsity I" className="dropdown-item">
              Junior Varsity I
            </Link>
            <Link to="/Teams/Junior Varsity II" className="dropdown-item">
              Junior Varsity II
            </Link>
          </div>
        </li>
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
