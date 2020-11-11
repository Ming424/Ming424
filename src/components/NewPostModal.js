import { render } from "@testing-library/react";
import React, { useState} from "react";

// https://getbootstrap.com/docs/4.3/components/modal/
function NewPostModal(props) {
  const [text, setText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleClose = () => {
    console.log("HANDLE CLOSE");
    props.setNewPostModalActive(false);
    console.log("newPostModalActive " + props.newPostModalActive)
  };

  const handlePost = (e) => {
    console.log("HANDLE POST");
    e.preventDefault();
    console.log("[" + text + "]");
    if (!text) {
      console.log("ERROR");
      setErrorMsg("Field is empty");
      console.log(errorMsg);
      return;
    } else {
      console.log("OK");
    }

    var id = props.userId;
    var name = props.userName;
    var txt = text;
    const timeElapsed = Date.now();
    const date = new Date(timeElapsed).toLocaleDateString();

    console.log(id + ", " + name + ", " + txt + ", " + date);
    
  }

 

  const renderErrorMessage = () => {
    return (
      <div>{errorMsg}</div>
    )
  }

  return (
    <div
      className="modal fade"
      id="newPostModal"
      tabIndex="-1"
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
            <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>


          <div className="modal-body">
            aaa
            
            
            <input type="file" className="form-control-file" id="exampleFormControlFile1" style={{paddingBottom:"50px"}}/>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setText(e.target.value)}></textarea>
            {renderErrorMessage}
          </div>


          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-secondary" onClick={handlePost}>
              Post
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
