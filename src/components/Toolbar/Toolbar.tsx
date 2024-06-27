import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div>
            <NavLink to="/" className="navbar-brand">Blog</NavLink>
            <ul className="navbar-nav ms-auto d-flex flex-row gap-5 flex-nowrap">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/contacts" className="nav-link">Contacts</NavLink></li>
                <li className="nav-item"><NavLink to="/about-us" className="nav-link">About Us</NavLink></li>
                <li className="nav-item"><NavLink to="/add-posts" className="nav-link">Add Posts</NavLink></li>
            </ul>
        </div>
    );
};

export default Toolbar;