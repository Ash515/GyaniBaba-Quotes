import React from 'react';
import './Header.css';
import {Link,BrowserRouter} from 'react-router-dom';

function Header(props){
    
    return(
        <BrowserRouter>
        <div className="header">
            <h2>GnaniBaba-Quotes</h2>
            <div className="addpost">
            <h3>New post</h3>
            </div>
            <div className="profile">
                <h3>Profile</h3>
            </div>
            <div className="logout">
                <h3>logout</h3>
            </div>
        </div></BrowserRouter>
    )
}

export default Header;