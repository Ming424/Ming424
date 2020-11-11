import React, { useState } from "react";
import "./App.css";

/**
 * COMPONENTS
 */
import Header from "./components/layout/Header";
import FloatObj from "./components/layout/FloatObj";
import NewPostModal from "./components/NewPostModal";
import PostObj from "./components/PostObj";

function PostForm({ addPost }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addPost(value);
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
  const [userId] = useState("001");
  const [newPostModalActive, setNewPostModalActive] = useState(false);
  const [openPostModalActive, setOpenPostModalActive] = useState(false);
  const [numPostInView, setNumPostInView] = useState(5);

  const [posts, setPosts] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false,
      user: "Jim",
      date: "09-April-2020",
      files: ["a.txt"],
      postId: "1"
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
      user: "Mohammed",
      date: "09-Mars-2020",
      files: ["c.txt","d.txt"],
      postId: "2"
    }
  ]);

  /**
   * FUNCTION
   */
  const addPost = (text) => {
    const newPostss = [...posts, { text }];
    setPosts(newPostss);
  };

  const handleSearch = (text) => {
    console.log("HANDLE SEARCH " + text);
  }

  const newPost = (event) => {
    console.log("NEW POST " + newPostModalActive);
    setNewPostModalActive(!newPostModalActive);
    console.log(newPostModalActive)
  };

  const updateNumPostInView = (i) => {
    console.log("New # item in view " + i)
    setNumPostInView(i);
    console.log("NEW VALUE " + numPostInView);
  }


  const completeTodo = (index) => {
    const newPosts = [...posts];
    if(newPosts[index].isCompleted==true){
      newPosts[index].isCompleted = false;
    } else {
      newPosts[index].isCompleted = true;
    }
    setPosts(newPosts);
  };

  const removeTodo = (index) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const renderPosts = () => {
    var len = numPostInView;
    if(posts.length<len) len = posts.length
    console.log("RENDERING " + len + " POSTS")
    return posts.slice(0,len).map((post, index) => (
      <PostObj
        key={index}
        index={index}
        post={post}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        userName={userName}
      />
    ));
  };

  return (
    <div className="app">
      <Header userName={userName} handleSearch={handleSearch} numPostInView={numPostInView} updateNumPostInView={updateNumPostInView} />
      
      
      <PostForm addPost={addPost} /> 
      <div className="mx-auto" style={containerStyle}> 
        {renderPosts()}
      </div>
      <div className="bt-new-post"></div>
      
      

      <div className="float-obj" style={floatObjStyle}>
        <FloatObj newPost={newPost} />
      </div>

      <NewPostModal
        setNewPostModalActive={setNewPostModalActive}
        newPostModalActive={newPostModalActive}
        userName={userName}
        userId={userId}
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
};


export default App;
