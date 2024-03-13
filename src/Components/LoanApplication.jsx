
import "./loan.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Loan = () => {
  const data = [
    { name: 'John Doe', email: 'john@example.com', mobile: '123', gender: 'Male', occupation: 'Engineer', state: 'CA', age: 30, score: 85 },
    { name: 'Jane Smith', email: 'jane@example.com', mobile: '987', gender: 'Female', occupation: 'Teacher', state: 'NY', age: 25, score: 92 },
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
          LOAN APPLICATION
        </div>
      <div className="col-3 col-lg-1 m-5">
      </div>
      <table className="table text-center w-75 m-auto mt-3 shadow border ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Gender</th>
          <th>Occupation</th>
          <th>State</th>
          <th>Age</th>
          <th>Score</th>
          <th>Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>{item.gender}</td>
            <td>{item.occupation}</td>
            <td>{item.state}</td>
            <td>{item.age}</td>
            <td>{item.score}</td>
            <td>
              <select>
                <option>Applied</option>
                <option>Approved</option>
                <option>Denied</option>
              </select>
            </td>
            <td>    <button  className="edit" onClick={openModal} >
                    <FontAwesomeIcon icon={faEdit} />
                  </button></td>
            
          </tr>
        ))}
      </tbody>
      </table>
      <div className="sample">
        <button className="btn btn-success ">New Transaction</button>
        <button className="btn btn-success ">View</button>
      </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add Loan application</h2>
        <label>
          comment:
          <input type="text" value={minScore} onChange={(e) => setMinScore(e.target.value)} />
        </label>
        <label>
          Max Amount:
          <input type="text" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default Loan;