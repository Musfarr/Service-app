import React from "react";
// import { ChevronDown } from "@carbon/icons-react";
import { useEffect } from "react";
import axios from "axios";



const Dash = () => {

useEffect(() => {
  CallApi();
} , [])


const CallApi = () => {

  axios({
    method:'get',
    url : 'https://jsonplaceholder.typicode.com/posts',
  }).then((res) =>{
    console.log(res)
  })
  
}



  return (
    <div className=" uk-flex uk-flex-center uk-flex-middle "   style={{ height:'100vh', backgroundColor: "#F5F5F5" }}>
      
    <div>
      <h2 className="card1head">Hi, User </h2>
      <p className="greenhead1">New User </p>
      </div>      
    </div>
  );
};

export default Dash;
