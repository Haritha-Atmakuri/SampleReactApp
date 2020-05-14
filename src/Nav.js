import React from 'react';
import './style.css'
import {Link} from 'react-router-dom';
function Nav(){
    return (
        
        <nav>
            <h4>Home</h4>
            <ul className="nav-links">
            <Link  className="nav-style" to="/dimensions"><li>Dimensions</li></Link>
          <Link  className="nav-style" to="/list"><li>List</li></Link>

            </ul>
        </nav>
    )
}
export default Nav;