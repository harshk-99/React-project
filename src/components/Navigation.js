import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from "../../public/logo.png";
import ShortTextIcon from "@material-ui/icons/ShortText";
import CallMadeIcon from "@material-ui/icons/CallMade";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="Navigation">
      <Navbar light expand="md">
        <NavbarBrand className="brand" href="/">
          <img src={logo} alt="logo" height="75" width="75" />
          AbsoluteX
        </NavbarBrand>
        <NavbarToggler onClick={toggleCollapse} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav-items" navbar>
            <NavItem>
              <NavLink className="nav-item" href="#">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="#">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href="#">
                Internships
              </NavLink>
            </NavItem>
            <NavItem className="right">
              <NavLink className="btn-1" href="#">
                <button type="button" className="btn btn-dark shop">
                  <span>
                    Shop <CallMadeIcon style={{ fontSize: 20 }} />
                  </span>
                </button>
              </NavLink>
            </NavItem>
            <Dropdown
              className="right"
              nav
              inNavbar
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
            >
              <DropdownToggle className="drop" nav>
                <ShortTextIcon style={{ fontSize: 50 }} />
              </DropdownToggle>
              <DropdownMenu className="menu">
                <DropdownItem>Sign up</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem>Sign in</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
