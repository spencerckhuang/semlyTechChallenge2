import Modal from "react-modal";

interface AddCourseModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    width: "450px",
    borderRadius: "0px",
  },
  overlay: {
    background: "rgb(0 0 0 / 70%)",
  },
};

const AddCourseModal = ({ isOpen, closeModal }: AddCourseModalProps) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <div>
        <div className="modal-heading">
          <h3>Add Course</h3>
        </div>
        <div className="modal-field">
          <div className="modal-label">Name:</div>
          <input name="name" className="modal-input" />
        </div>
        <div className="modal-field">
          <div className="modal-label">Code:</div>
          <input name="code" className="modal-input" />
        </div>
        <div className="modal-field">
          <div className="modal-label">Credits:</div>
          <input name="credits" className="modal-input" />
        </div>
        <div className="modal-field">
          <button className="modal-confirm-button">Confirm</button>
        </div>
      </div>
    </Modal>
  );
};

export default AddCourseModal;
