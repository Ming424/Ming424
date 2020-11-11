import React, { useState } from "react";

function PostObj({ todo, index, completeTodo, removeTodo,userName }) {
  const [value, setValue] = React.useState("");
  const [comments, setComments] = useState([
    { user: "user#1", comment: "wow" },
    { user: "user#2", comment: "good shit" },
  ]);

  const renderComments = () => {
    return comments.map((comment, index) => (
      <div>
        <label class="font-weight-bold">{comment.user}:</label>
        &nbsp;{comment.comment}
      </div>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log("NEW COMMENT: " + value);
    const newTodos = [...comments, { user:userName,comment:value }];
    setComments(newTodos);
    setValue("");
    /* @UPDATE DB */
  };

  return (
    <div style={mainStyle}>
      <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
        
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div style={{fontSize:"15px"}}>{renderComments()}</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

const mainStyle = {
    margin:"0px",
    border: "1px green dashed",
    paddingBottom: "50px",
}

export default PostObj;
