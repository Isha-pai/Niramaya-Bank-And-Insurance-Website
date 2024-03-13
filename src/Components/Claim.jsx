import React , {useState} from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import "./LendingCriteria.css";
import view from "../ICONS/view.png";
import download from "../ICONS/download.jpg";
import "./Claim.css";

const Header = (props) => {
  const data = [
    {pdf:'sample.pdf'},
    {pdf:'sample2.pdf'},
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [minScore, setMinScore] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const handleSubmit = () => {
    closeModal(); 
  };

  return (
    <div className="loan">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="title">
          CLAIM
        </div>
      <div className="col-3 col-lg-1 m-5">
      </div>
      <table className="table text-center w-75 m-auto mt-3 shadow border ">
      <thead>
        <tr>
          <th>Document</th>
          <th>View</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.pdf}</td>
            <td>
                <img src={view} alt="view"></img>
            </td>
            <td>
                <img src={download} alt="download"></img> 
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
    </div>

    
  );
};

export default Header;