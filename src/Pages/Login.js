import React, { useState } from 'react'
import logo from "../logo512.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

const Login = () => {

  const[name , setname] = useState('')
  const[email , setemail] = useState('')
  const[password , setpassword] = useState('')



  const CallApi = () => {
    axios({
      method:'post',
      url : 'https://service-app-backend-teal.vercel.app/api/user/login',
    }).then((res) =>{

      console.log(res)
      if(res.data.status === 200){
        localStorage.setItem('name' , res.data.data.name )
        window.location.href = '/dash'
      }
      else{
        swal({
          icon : 'error' ,
          text : "Invalid Credentials"
        })
      }


    })
  }

  // REGISTER API POST
  // 'https://service-app-backend-teal.vercel.app/api/user/register'
  
  // dATA API GET 
  // 'https://service-app-backend-teal.vercel.app/api/user/me'

  return (
<>
    <div >
      
        <div className='uk-grid' uk-grid = "">
            <div className='uk-width-1-2 black '>
                <img src={logo}></img>
            </div>

            <div className='uk-width-1-2 white' >
            <div className="login uk-margin">
          <div>
            <h1 className="loginheading">Login </h1>
          </div>

          <div className="uk-margin">
            <input
            onChange={(e) => setemail(e.target.value)}
              className="logininput  "
              type="text"
              placeholder="Email or mobile number"
              aria-label="Email or mobile number"
              
            />
          </div>

          <div className="uk-margin">
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="logininput"
              type="Password"
              placeholder="password"
              aria-label="password"
              
            />
          </div>
          <div className="uk-margin">
            
          </div>
          <div className="uk-flex   ">
            <div>
              <Link to="/form">
              <h3 className="forgot-button">Register</h3>
              </Link>           
            </div>
            <div >
              {/* <Link to="/dash"> */}
              <button onClick={CallApi} className=" loginbtn "> Log in </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login