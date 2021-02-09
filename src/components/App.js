import React, {Component, useState} from "react";
import '../styles/App.css';

function htmltag(props) {
  return <p>Hello, {props.data-ns-test}</p>;
}

const element1 = <htmltag data-ns-test ="project-name">electricity bill mgmt system</htmltag>
const element2 = <htmltag data-ns-test ="project-description">it is a prepaid electricity bill mgmt system using html css javascript</htmltag>
 
const App = () => {
  return (
    // {element1,element2}
    //<div>main</div>
    <>
    {element1}
    
    {element2}
   
    </>
  )
}


export default App;
