import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/measurement">Make a measurment</CustomLink>
        <CustomLink to="/plot">Show plot</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}