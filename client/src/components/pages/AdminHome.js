import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

const AdminHome = props => {
    return (
        <Fragment>
            <div className="row center">
                <div className="col s3 offset-s3">
                    <span className="flow-text">dsfkasjdfas</span>
                </div>
                <div className="col s3">
                    <span className="flow-text">dsfkasjdfas</span>
                </div>
            </div>
            <div className="row center">
                <div className="divider"></div>
            </div>
            <div className="row center">
                <div className="col s3 offset-s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/admin'>Admin Portal</Link>
                </div>
                <div className="col s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/mediator'>M Portal</Link>
                </div>
            </div>
            <div className="row center">
                <div className="col s3 offset-s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/admin'>Admin Portal</Link>
                </div>
                <div className="col s3">
                    <Link className="waves-effect waves-light btn-large" to='/admins/manage'>Manage Administrators</Link>
                </div>
            </div>
            <div className="row center">
                <div className="col s3 offset-s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/admin'>Admin Portal</Link>
                </div>
                <div className="col s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/mediator'>M Portal</Link>
                </div>
            </div>
            <div className="row center">
                <div className="col s3 offset-s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/admin'>Admin Portal</Link>
                </div>
                <div className="col s3">
                    <Link className="waves-effect waves-light btn-large disabled" to='/mediator'>M Portal</Link>
                </div>
            </div>
        </Fragment>
    )
}

AdminHome.propTypes = {

}

export default AdminHome;
