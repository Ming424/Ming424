import React, { useState, useEffect } from "react";

// https://getbootstrap.com/docs/4.3/components/modal/
function NewPostModal(props) {
  const handleClose = () => {
    props.setNewPostModalActive(false);
  };

  return (
    <div
      className="modal fade"
      id="newPostModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              New Post
            </h5>
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <button className="buttom-secondary">Upload file</button>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
  fontWeight: "bold",
};
const hrStyle = {
  marginTop: "2px",
  marginBottom: "2px",
};
const modalStyle = {
  paddingTop: "10px",
};
const modalContentStyle = {
  minHeight: "65vh",
};
export default NewPostModal;
