import React from 'react'
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

export default function NavbarNav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}<FaIcons.FaIcons/></Link>
      </div>
    </nav>
    )
}


NavbarNav.defaultProps = {
    title: "My To Do ",
    searchBar: false
}
NavbarNav.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}