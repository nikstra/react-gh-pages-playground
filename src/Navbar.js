import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="/about">About</Link>&nbsp;|&nbsp; 
            <Link to="/careers">Careers</Link>
        </div>
    )
}
export default Navbar;