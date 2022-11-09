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
              <DropdownMenu right>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem>SignOff</DropdownItem>
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
