import React, { useState } from "react";
import l1 from "../logo512.png";
import axios from "axios";


const Form = () => {


  const[name , setname] = useState('')
  const[lname , setlname] = useState('')
  const[email , setemail] = useState('')
  const[password , setpassword] = useState('')

  const HandleSubmit = (event) => {
    event.preventDefault();

    

    axios({
      method:'post',
      url : 'https://service-app-backend-teal.vercel.app/api/user/register',
      data : {name : name , email:email , password : password}  

    }).then((res) =>{
      console.log(res)
      
    })

  }

  return (
    <div className="bg">
      <div className="formhead  ">
        <div className="uk-container uk-container-large">
          <div className="uk-flex uk-flex-between uk-flex-middle">
            <div>
              <img style={{width:'5%'}} src={l1}></img>
              <span className="logotext">Task Tool </span>
            </div>
            <div>
            </div>

          </div>
        </div>
      </div>
      <div className="formbg">
        <div className="uk-container">
          <h1 className="uk-margin-remove-bottom formheading">
            Registration
          </h1>
          <p className="mtr formsubhead ">
            Please provide the details
          </p>
          <div className="uk-card uk-card-body card">
            <h1 className="card2head uk-padding-remove-top">
              User information{" "}
            </h1>


            <form onSubmit={HandleSubmit} >
            <div className="uk-container-small">

              <div className="uk-grid uk-grid-small" uk-grid="">
                <div className="uk-width-1-2">
                  <label htmlFor="First" className="mbr card2body">
                    {" "}
                    First Name{" "}
                  </label>
                  <br />
                  <input
                    onChange={(e) => setname(e.target.value)}
                    id="First"
                    placeholder="First Name"
                    className="uk-input forminput"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Last Name{" "}
                  </label>
                  <input
                    onChange={(e) => setlname(e.target.value)}
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Last Name"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Email{" "}
                  </label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Email"
                  />
                </div>
                <div className="uk-width-1-2">
                  <label htmlFor="Last" className="mbr card2body">
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    id="Last"
                    className="uk-input forminput"
                    placeholder="Password"
                  />
                </div>
              </div>
              
          

             
              </div>

              <div className="frmbtn uk-flex  uk-align-right uk-margin-large">
                <button type="submit" className="  loginbtn">
                  Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
