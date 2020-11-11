import React from 'react'

function FloatObj(props){

    return (
    <div style={mainStyle} >
        <div className="mb-50">
            <button type="button" className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >Back to Top</button>
        </div>
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newPostModal" onClick={() => props.newPost()} >New Post</button>
        </div>
    </div>
    )
  }

  const mainStyle ={
      paddingTop: "5px",
  }
 


  export default FloatObj