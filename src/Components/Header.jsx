import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="containerhead">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Link to='/login'><a
                  href="#features"
                  className="btn"
                >
                  Bank
                </a></Link>
                <Link to='/insurance'>
                <a
                  href="#features"
                  className="btn "
                >
                  Insurance
                </a>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;