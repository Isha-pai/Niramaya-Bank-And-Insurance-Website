import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./Insurancepage.css";
import lend from "../ICONS/lend.jpeg";

import profile from "../ICONS/profile.jpeg";

const Bank = () => {
  return (
    <div className="cards">

        <Link to='/claim'>

        <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">       </Card.Subtitle>
          <Card.Text className="card-text">
            
          </Card.Text>
          <img src={lend} className="sha">
          </img>
          
          <p className="is">CLAIMS </p>
          <button  className="button-text">
          YOUR CLAIMS
          </button>
        </Card.Body>
      </Card>
        </Link>
        <Link to='/insuranceprofile'>
        <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">       </Card.Subtitle>
          <Card.Text className="card-text">
            
          </Card.Text>
          <img src={profile} className="sha">
          </img>
          
          <p className="is">YOUR PROFILE </p>
          <button  className="button-text">
          PROFILE
          </button>
        </Card.Body>
      </Card>
        </Link>
    </div>
  );
};

export default Bank;