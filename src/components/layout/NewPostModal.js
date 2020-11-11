import React, { useState, useEffect } from "react"

// https://getbootstrap.com/docs/4.3/components/modal/
function NewPostModal(props) {
  const [closed, setClosed] = useState(false)


  const handleClose = () => {
    props.setNewPostModalActive(false)
  }

  return (
    <div class="modal fade" id="newPostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...b
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div> 
      
      {/* Float close buttom */}
      <button
        type="button"
        className="btn btn-light btn-lg"
        data-dismiss="modal"
        onClick={() => handleClose()}
        style={flowBtnClose}
      >
        Close
      </button>
    </div>
  )
}

const titleStyle = {
  fontWeight: "bold"
}
const hrStyle = {
  marginTop: "2px",
  marginBottom: "2px"
}
const modalStyle = {
  paddingTop: "10px"
}
const flowBtnClose = {
  position: "fixed",
  bottom: "20px",
  right: "40px"
}
const modalContentStyle = {
  minHeight: "65vh"
}
export default NewPostModal
