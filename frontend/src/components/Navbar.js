import { React } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom';

const Navbar = (props) => {
    let location = useLocation();
    let history = useHistory();
    const handlelogout = () => {
        localStorage.removeItem('token');
        history.push("/login");
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} py-3 px-2`} >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input onClick={props.togglemode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} me-3`} htmlFor="flexSwitchCheckDefault">{props.btn}</label>
                    </div>
                    {!localStorage.getItem('token') ? <form className="d-flex"><Link className="btn btn-info mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-info mx-1" to="/signup" role="button">Signup</Link> </form> : <button onClick={handlelogout} className="btn btn-info">Logout</button>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar
