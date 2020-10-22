import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const Extra = (props) => {
  let subtitle;
  const { name, picture, location, login } = props.info;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <li className='extra-li' id={login.uuid} onClick={openModal}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
      <img
        src={picture.large}
        className='extra-image'
        alt='halloween extra actor'
      />
      <h4 className='extra-header'>Name:</h4>
      <div>
        {name.first} {name.last}
      </div>
      <h4 className='extra-header'>Location:</h4>

      <div>{location.state}</div>
    </li>
  );
};
