import React, { useState } from "react";

function PostObj({ post, index, completeTodo, removeTodo, userName }) {
  const [value, setValue] = React.useState("");
  const [comments, setComments] = useState([
    { user: "user#1", comment: "wow" },
    { user: "user#2", comment: "good shit" },
  ]);

  const renderComments = () => {
    return comments.map((comment, key) => (
      <div key={key}> 
        <label className="font-weight-bold">{comment.user}:</label>
        &nbsp;{comment.comment}
        
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log("NEW COMMENT: " + value);
    const newTodos = [...comments, { user: userName, comment: value }];
    setComments(newTodos);
    setValue("");
    /* @UPDATE DB */
  };

  const renderFile = () => {
    return post.files.map((file,key) => (
      <span>
        <li  onClick={(e) => handleFile()} className="list-group-item">{file}</li>
      </span>
    ));
  }

  const handleFile = e => {
    
  }

  return (
    <div style={mainStyle}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title"><strong>{post.user}</strong></h4>
          <h6 className="card-subtitle text-muted  mb-2">{post.date}</h6>

          <ul className="list-group list-group-flush mb-2">
              {renderFile()}
          </ul>
          
          <p className="card-text" style={{ textDecoration: post.isCompleted ? "line-through" : "" }} >{post.text}</p>
          <hr/>
          <div style={{ fontSize: "15px" }}>{renderComments()}</div>
          <form onSubmit={handleSubmit}>
            <input
            class="form-control form-control-sm"
            placeholder="leave your comment..."
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form> 


            <button class="btn btn-primary btn-sm" onClick={() => completeTodo(index)}>Complete</button>
            <button class="btn btn-primary btn-sm" onClick={() => removeTodo(index)}>delete</button>
           
        </div>
      </div>
    </div>
  );
}

const mainStyle = {
  margin: "0px", 
  paddingBottom: "10px",
};

const userProfileStyle = { 
  borderRadius:"50%",
  fontSize:"6px",
  width: "20px",
  height: "20px",
  textAlign: "center"
}

export default PostObj;
