import React from 'react';
import { Link } from 'react-router-dom';
// import Banner from './images/banner.jpg';
import './style.scss';

class MenuItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="menuItem">
                <a href="https://twitter.com/flexdinesh">
                    {/* <img src={Banner} alt="react-redux-boilerplate - Logo" /> */}
                </a>
                <div className="ver-nav-bar">
                    <div>
                        <Link className="router-link" to="/club">
                            My Club
          </Link>
                    </div>
                    <div>
                        <Link className="router-link" to="/features">
                            Features
          </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuItem;
