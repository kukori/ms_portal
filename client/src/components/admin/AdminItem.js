import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAdmin } from '../../actions/adminActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AdminItem = ({admin, deleteAdmin}) => {
    const onDelete = () => {
        deleteAdmin(admin._id);
        //M.toast({ html: 'Admin Deleted'});
    }

    return (
        <tr>
            <td>{admin.firstName}</td>
            <td>{admin.lastName}</td>
            <td>{admin.email}</td>
            <td>{admin.isActive ? <i className="material-icons grey-text">done</i> : <i className="material-icons grey-text">clear</i>}</td>
            <td>
                <a href='#!' onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </td>
        </tr>
    );
};

AdminItem.propTypes = {
    admin: PropTypes.object.isRequired,
    deleteAdmin: PropTypes.func.isRequired,
}

export default connect(null, { deleteAdmin })(AdminItem);

