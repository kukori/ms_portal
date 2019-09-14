import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import { addAdmin } from '../../actions/adminActions';
import PropTypes from 'prop-types';

const AddAdminModal = ({ addAdmin }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === '' || email === '' || password === '') {
            M.toast({ html: 'All fields are mandatory'})
        } else {
            const newAdmin = {
                firstName,
                lastName,
                email,
                password
            };

            addAdmin(newAdmin);

            M.toast({ html: `New admin added`});

            //Clear fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div id="add-admin-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter New Admin</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => {setFirstName(e.target.value)}} />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => {setLastName(e.target.value)}} />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="email" value={email} onChange={e => {setEmail(e.target.value)}} />
                        <label htmlFor="email" className="active">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="password" name="password" value={password} onChange={e => {setPassword(e.target.value)}} />
                        <label htmlFor="password" className="active">Password</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

AddAdminModal.propTypes = {
    addAdmin: PropTypes.func.isRequired,
}

export default connect(null, { addAdmin })(AddAdminModal);
