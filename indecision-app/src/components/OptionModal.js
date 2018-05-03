import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( //implicit return
      <Modal
        isOpen={!!props.selectedOption} // true booleans
        contentLabel="Selected Option"
        onRequestClose={props.clearSelectedOption}
      >
        <h3>Selected Option</h3>
        {props.selectedOption && <p> {props.selectedOption} </p>}
        <button onClick={props.clearSelectedOption}>okay</button>
      </Modal>
);

export default OptionModal;