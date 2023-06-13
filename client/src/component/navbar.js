import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const { hasLogin } = useSelector((state) => state.account.login);
  const { name } = useSelector((state) => state.account.user);
  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={"/images/DCSLAB.png"}
            height={80}
            width={600}
            alt="DCSLAB"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/issuer">
                Issuer
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/labor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Labor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/labor/findjob">
                    FindJob
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/labor/agreeverification">
                    AgreeVerification
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/labor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="/company/applyverification"
                  >
                    Applyverification
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/company/receivedcase">
                    RecievedCase
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/company/addjob">
                    AddJob
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/company/deletejob">
                    DeleteJob
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {hasLogin ? (
            <div className="navbar-text">
              {name}
              {console.log(name)}
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="navbar-text">
              <Link to="/login">Login / Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
