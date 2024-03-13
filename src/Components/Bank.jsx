import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "./Bank.css";
import lend from "../ICONS/lend.jpeg";
import loan from "../ICONS/loan.jpeg";
import profile from "../ICONS/profile.jpeg";


const Bank = () => {
  return (
   
  <div className="cards">
        <Link to='/lending'>
        <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">       </Card.Subtitle>
          <Card.Text className="card-text">
            
          </Card.Text>
          <img src={lend} className="sha">
          </img>
          
          <p className="is">CHOOSE CRITERIA </p>
          <button  className="button-text">
           LENDING CRITERIA
          </button>
         
        </Card.Body>
      </Card>
        </Link>
        <Link to='/loan'>
        <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">       </Card.Subtitle>
          <Card.Text className="card-text">
            
          </Card.Text>
          <img src={loan} className="sha">
          </img>
          <p className="is">UNLOCK YOUR POTENTIAL </p>
          <button  className="button-text">
          LOAN APPLICATION
          </button>
         
         
         
        </Card.Body>
      </Card>
        </Link>
        <Link to='/profile'>
        <Card className="card">
        <Card.Body className="card-body">
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">       </Card.Subtitle>
          <Card.Text className="card-text">
            
          </Card.Text>
          <img src={profile} className="sha">
          </img>
          <p className="is">CHECK YOUR PROFILE </p>
          <button  className="button-text">
           VIEW PROFILE
          </button>
        </Card.Body>
      </Card>
        </Link>    
    </div>
  
  );
};

export default Bank;