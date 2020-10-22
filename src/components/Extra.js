import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    padding: "10px",
    top: "40%",
    left: "40%",
    right: "40%",
    bottom: "9%",
    marginRight: "-40%",
    transform: "translate(-33.5%, -40%)",
    zIndex: "113",
  },
};

Modal.setAppElement("#root");

export const Extra = (props) => {
  const { name, picture, location, login, email, dob, phone } = props.info;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <li className='extra-li' id={login.uuid}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        contentLabel='Example Modal'
      >
        <div className='extra-div'>
          <img
            src={picture.large}
            className='extra-image'
            alt='halloween extra actor'
          />
          <div className='modal-items'>
            <div className='line-item'>
              <h4 className='extra-header'>Name:</h4>
              <div>
                {name.first} {name.last}
              </div>
            </div>
            <div className='line-item'>
              <h4 className='extra-header'>Location:</h4>
              <div>{location.state}</div>
            </div>
            <div className='line-item'>
              <h4 className='extra-header'>Age:</h4>
              <div>{dob.age}</div>
            </div>
            <div className='line-item'>
              <h4 className='extra-header'>Phone:</h4>
              <div>{phone}</div>
            </div>
            <div className='line-item'>
              <h4 className='extra-header'>Email:</h4>
              <div>{email}</div>
            </div>
          </div>
          <button onClick={closeModal}>close</button>
        </div>
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      </Modal>
      <div className='extra-div' onClick={openModal}>
        <img
          src={picture.medium}
          className='extra-image'
          alt='halloween extra actor'
        />
        <h4 className='extra-header'>Name:</h4>
        <div>
          {name.first} {name.last}
        </div>
        <h4 className='extra-header'>Location:</h4>

        <div>{location.state}</div>
      </div>
    </li>
  );
};
