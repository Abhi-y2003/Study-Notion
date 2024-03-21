import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const LoginForm = (setLogedIn) => {

    const Naigate = useNavigate();

    const[formData, setFormData] = useState({email:'', password:''}
    );

    const[showPassword, setShowPassword] = useState(false)

    function changeHandler(event){ 
        setFormData(prevFormData=>{
          return{...prevFormData,
            [event.target.name]: event.targetvalue 
          }
        })
      }

      function submitHandler(event){
        event.preventDefault();
        setLogedIn(true);
        toast.success("Loged In")
        Naigate("/dashboard")

      }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sub>*</sub>
            </p>
        
        <input required type='email' 
        name='email'
        placeholder='Enter Email Address'
        value={formData.email} onChange={changeHandler}> 

        </input>
        </label>

        <label>
            <p>
                Password<sub>*</sub>
            </p>
        
        <input required 
        type={showPassword? 'text' : "password"} 
        name='password'
        placeholder='Enter Password'
        value={formData.password} onChange={changeHandler}> 

        </input>
        <span onClick={()=> setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>

        <Link to="#">
            <p>
              Forget Password
            </p>
        </Link>
        </label>

        <button>
            Signin
        </button>


    </form>
  )
}

export default LoginForm