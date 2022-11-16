import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function NavbarNav(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="navbar navbar-dark bg-dark">
        <NavbarBrand href="/">
          My To Do <FaIcons.FaIcons />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Julian Scoles
              </DropdownToggle>
              <DropdownMenu style={{ textDecoration: "none" }}>
                <Link to="/myProfile">
                  <DropdownItem>My Profile</DropdownItem>
                </Link>
                <Link to="/login">
                  <DropdownItem>SignOff</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarNav;

NavbarNav.defaultProps = {
  title: "My To Do ",
  searchBar: false,
};
