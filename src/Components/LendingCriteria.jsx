import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import "./LendingCriteria.css";

const Header = (props) => {
  const data = [
    { minscore: '50', maxamount: '120000' },
    { minscore: '75', maxamount: '200000' },
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
          LENDING CRITERIA
        </div>
        <div className="col-3 col-lg-1 m-5"></div>
        <table className="table text-center w-75 m-auto mt-3 shadow border ">
          <thead>
            <tr>
              <th>Min Score</th>
              <th>Max Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.minscore}</td>
                <td>{item.maxamount}</td>
                <td>
                  <button  className="edit" onClick={openModal} >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sample">
          <button className="btn btn-success" onClick={openModal}>Add</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Add Lending Criteria</h2>
        <label>
          Min Score:
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

export default Header;
