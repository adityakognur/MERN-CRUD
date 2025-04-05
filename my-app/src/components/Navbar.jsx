import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/add">Add Product</Link>
  </nav>
)

export default Navbar
