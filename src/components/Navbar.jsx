import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand ">
                <img src="/images/logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                ShopShop
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" style={{"fontWeight": "bold"}}>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
  }
  
  export default Nav;