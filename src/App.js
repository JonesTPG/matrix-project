import React, { useState } from "react";
import Modal from "react-modal";

import matrix from './matrix.png';
import button from './button.png';
import './App.css';

Modal.setAppElement("#root");

function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
        <img src={matrix} className="image" alt="matrix" />
        <img onClick={toggleModal} src={button} alt="button" />        
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        >
          <div> I am from ... </div><br/>
          <div> My question is ... </div><br/>
          <button onClick={toggleModal}>Close modal</button>
      </Modal>  
    </div>
  );
}

export default App;
