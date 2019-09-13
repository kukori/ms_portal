import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row center">
                    <div className="col s3 offset-s3">
                        <Link className="waves-effect waves-light btn-large" to='/admin'>Admin Portal</Link>
                    </div>
                    <div className="col s3">
                        <Link className="waves-effect waves-light btn-large" to='/mediator'>M Portal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
