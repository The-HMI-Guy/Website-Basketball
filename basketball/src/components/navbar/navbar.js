export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <li>
            <a href="/Schedule">Schedule/Results</a>
          </li>
          <li>
            <a href="/Teams">Teams</a>
          </li>
          <li>
            <a href="/Standings">Standings</a>
          </li>
          <li>
            <a href="/News">News</a>
          </li>
          <li>
            <a href="/Youth">Youth Info</a>
          </li>
          <li>
            <a href="/Offseason">Offseason Info</a>
          </li>
          <li>
            <a href="/History">History/Records</a>
          </li>
        </li>
      </ul>
    </nav>
  );
}
