import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
        render () {
            return (
                <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="#" className="nav-link">Facebook</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="#" className="nav-link">Instagram</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="#" className="nav-link">Email</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
            )
        }
    }
export default Footer;