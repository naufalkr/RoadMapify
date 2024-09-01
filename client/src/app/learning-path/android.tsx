import React, { useState, useEffect } from "react";

function Android(){
  const [content, setContent] = useState([]);

  useEffect(()=>{
    fetch("localhost:5001/android")
    .then(res=>res.json())
    .then((data)=>{
      setContent(data.content);
    });
  });

  return <div>{content}</div>
}

export default Android;