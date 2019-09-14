import React, {useEffect, Fragment} from 'react';
import AdminItem from '../admin/AdminItem';
import { connect } from 'react-redux';
import { getAdmins } from '../../actions/adminActions';
import PropTypes from 'prop-types';

const AdminList = ({admin: {admins, loading}, getAdmins}) => {

useEffect(() => {
  getAdmins();
// eslint-disable-next-line
}, []);

return (
    <Fragment>
      <div className="row center">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Active</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {!loading && admins !== null && admins.map(admin => <AdminItem key={admin._id} admin={admin}  />)}
          </tbody>
        </table>
        <a href="#add-admin-modal" className="modal-trigger">
          <i className="material-icons">person_add</i>
        </a>
      </div>
    </Fragment>
  )
}

AdminList.propTypes = {
  admins: PropTypes.array,
  getAdmins: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  admin: state.admin
});

export default connect( mapStateToProps, { getAdmins })(AdminList);
