import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
//import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types';

const Login = ({auth: {isAuthenticated, isLoading}, login, history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginSubmit = e => {
        e.preventDefault();
        login({email, password, history});
    }

    if(isAuthenticated && !isLoading) {
        return <Redirect to='/admin' />
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={onLoginSubmit}>
                <div className="row center">
                    <div className="input-field col s4 offset-s4">
                        <input placeholder="email" id="email" type="email" value={email} className="validate" onChange={e => {setEmail(e.target.value)}}/>
                        {/* <label htmlFor="email">Email</label> */}
                    </div>
                </div>
                <div className="row center">
                    <div className="input-field col s4 offset-s4">
                        <input placeholder="password" id="password" type="password" value={password} className="validate" onChange={e => {setPassword(e.target.value)}} />
                        {/* <label htmlFor="password">Password</label> */}
                    </div>
                </div>
                <div className="row center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});
  
export default connect(mapStateToProps,{ login })(Login);
  