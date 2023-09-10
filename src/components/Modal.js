import React from "react";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items your shopping cart</h4>
        <div className="btn-container">
          <button type="submit" className="btn confirm-btn" onClick={() => {}}>
            Yes, I'm sure!
          </button>
          <br />

          <button type="submit" className="btn clear-btn" onClick={() => {}}>
            No ,Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
