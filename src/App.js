import React, { useState } from "react";
import "./App.css";

/**
 * COMPONENTS
 */
import Header from "./components/layout/Header";
import FloatObj from "./components/layout/FloatObj";
import NewPostModal from "./components/layout/NewPostModal";
import PostObj from "./components/PostObj";

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  /**
   * STATE
   */

  const [userName] = useState("Timmy");
  const [newPostModalActive, setNewPostModalActive] = useState(false);
  const [openPostModalActive, setOpenPostModalActive] = useState(false);
  const [numPostInView, setNumPostInView] = useState(5);

  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  /**
   * FUNCTION
   */
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleSearch = (text) => {
    console.log("HANDLE SEARCH" + text);
  }

  const newPost = (event) => {
    console.log("NEW POST");
    setNewPostModalActive(true);
  };

  const updateNumPostInView = (i) => {
    console.log("New # item in view " + i)
    setNewPostModalActive(i);
  }


  const completeTodo = (index) => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted==true){
      newTodos[index].isCompleted = false;
    } else {
      newTodos[index].isCompleted = true;
    }
    
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const renderPosts = () => {
    return todos.map((todo, index) => (
      <PostObj
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        userName={userName}
      />
    ));
  };

  return (
    <div className="app">
      <Header userName={userName} handleSearch={handleSearch} numPostInView={numPostInView} updateNumPostInView={updateNumPostInView} />
      <div className="mx-auto" style={containerStyle}>
        {renderPosts()}
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="bt-new-post"></div>
      <div className="float-obj" style={floatObjStyle}>
        <FloatObj newPost={newPost} />
      </div>

      <NewPostModal
        setNewPostModalActive={setNewPostModalActive}
        newPostModalActive={newPostModalActive}
      />
    </div>
  );
}

const floatObjStyle = {
  position: "fixed",
  bottom: "10px",
  right: "10px",
  paddingButton:"50px"
};

const containerStyle = {
  marginTop: "10px",
  borderRadius: "4px",
  maxWidth: "500px",
  border: "1px yellow dashed"
};


export default App;
