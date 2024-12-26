import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Wrapper>
      <div className="header">
        <nav className="navbar container">
          <div className="navbar-logo">Rony</div>
          <ul
            className={
              isMobileMenuOpen ? "navbar-links active" : "navbar-links"
            }
          >
            <li className="navbar-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMobileMenu} // Close menu on link click
              >
                Home
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMobileMenu} // Close menu on link click
              >
                About
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMobileMenu} // Close menu on link click
              >
                Portfolio
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMobileMenu} // Close menu on link click
              >
                Services
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMobileMenu} // Close menu on link click
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
            <i
              className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  .header {
    background-color: #333;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #333;
    color: #fff;
  }

  .navbar-logo {
    font-size: 24px;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navbar-link {
    color: #fff;
    text-decoration: none;
  }

  .navbar-link.active {
    color: crimson;
    font-weight: bold;
  }

  .navbar-item {
    margin-left: 20px;
  }

  .navbar-link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }

  .navbar-link:hover {
    color: #ddd;
  }

  .mobile-menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    .navbar-links {
      display: none;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #333;
    }

    .navbar-links.active {
      display: flex;
    }

    .navbar-item {
      margin: 10px 0;
      text-align: center;
    }

    .mobile-menu-icon {
      display: block;
    }
  }
`;

export default Header;
