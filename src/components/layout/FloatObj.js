import React from 'react'

function FloatObj(props){

    const newPost = () => {
        console.log("FLOATOBJ NEW POST");
        props.newPost()

    }

    return (
    <div style={mainStyle} >
        <div>
            <button type="button" className="btn btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >Back to Top</button>
        </div>
        <div>&nbsp;</div>
        <div>
        <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Disabled tooltip">
            <button type="button" className="btn btn-primary" data-toggle="modal"  data-target={"#newPostModal"} onClick={() => newPost()} >New Post</button>
        </span>
        </div>
    </div>
    )
  }
// data-toggle="modal" data-target="#newPostModal"
  const mainStyle ={ 
  }
 


  export default FloatObj