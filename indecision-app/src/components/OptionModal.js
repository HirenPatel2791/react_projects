import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( //implicit return
      <Modal
        isOpen={!!props.selectedOption} // true booleans
        contentLabel="Selected Option"
        onRequestClose={props.clearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body"> {props.selectedOption} </p>}
        <button className="button" onClick={props.clearSelectedOption}>okay</button>
      </Modal>
);

export default OptionModal;