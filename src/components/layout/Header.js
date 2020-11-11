import { render } from "@testing-library/react";
import React, { useState } from "react";

function Header(props) {
  const [postInViewList] = useState([5,10,20,30]);
  const [value, setValue] = useState("");
  const renderDropDown = () => {
    var i = props.numPostInView;
    return postInViewList.map((item) => {
      if(item !== i){
        var value = item;
        return(
          <a className="dropdown-item" onClick={()=>props.updateNumPostInView(value)}>
            {value}
          </a>
        )
      }
    });
  };

  const handleSearcha = (e) => {
    console.log("HEADER HANDLE SEARCH " + value)
    e.preventDefault();
    if(!value) return;
    props.handleSearch(value);
    setValue("");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">SOEN387 A2</a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props.numPostInView}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {renderDropDown()}
              </div>
            </li>
            
            
          </ul>
          <div className="my-2 my-lg-0">
            <form onSumbit={handleSearcha}>
            <input onChange={(e)=> setValue(e.target.value)} className="form-control mr-sm-2"  type="search" placeholder="Search" aria-label="Search"/>
            </form>
            
          </div>
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
