import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
<<<<<<< HEAD
  //const path = window.location.pathname;
=======
  const teamsPath = "/Teams";
  const isTeamPathActive = useMatch({ path: `${teamsPath}/*`, end: false });

>>>>>>> 5f7e298acf55bcb8c70097d2d6bd5b2394df12bc
  return (
    <nav className="nav">
      <Link to="/" className="nav">
        <img
          style={{ width: 300, height: 100 }}
          src="/WebsiteLogo.png"
          className="App-Logo"
          alt="logo"
        />
      </Link>
      <ul>
        <CustomLink to="/Schedule">Schedule/Results</CustomLink>
        <li className="dropdown">
          <CustomLink to={teamsPath} forceActive={isTeamPathActive}>
            Teams
          </CustomLink>
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

function CustomLink({ to, children, forceActive, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive || forceActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
