import {Link} from "react-router-dom"

function Navbar(){

return(
            
        <nav className="navbar">
            <h2 className="logo">Fredrich Bene<span>detti</span> Luna</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to ="/cv">CV</Link></li>
                <li><Link to ="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    
    );
}
export default Navbar;