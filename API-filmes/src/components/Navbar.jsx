import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

const Navbar = () => {
<nav id="navbar">
          <h2>
            <Link to="/" >MoviesLib</Link>
          </h2>
          <form>
            <input type="text" placeholder="Busque um filme"/>
            <button type="submit"></button>
          </form>
</nav>
};

export default Navbar;