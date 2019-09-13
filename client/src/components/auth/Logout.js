import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

const Logout = ({ auth: {isAuthenticated, isLoading }, logout }) => {
  return (
    isAuthenticated && !isLoading
     && <Fragment><a onClick={logout} href='#!'>Logout</a></Fragment>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);