import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setLogedIn}) => {

  const[formData , setFormData] = useState({
    firstName:'', 
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
   });

   const[showPassword, setShowPassword] = useState(false);

   function changeHandler(event){
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
      [event.target.name]: event.target.value
      }
    }
  )}

  const Navigate = useNavigate();
  
   function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password do not match")
      return; 
    }
    setLogedIn(true);
    toast.success("Account Created")
    Navigate("/dashboard")
   }
  return (
    <div>
      {/*student instructor tab */}
      <div>
        <button>
          studnet
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        <div>
        <label>
          <p>
            First name<sup>*</sup>
          </p>
          <input required type='text'
          name='firstName'
          onChange={changeHandler}
          placeholder='Enter first name'
          value={formData.firstName}></input>
        </label>

        <label>
          <p>
            Last name<sup>*</sup>
          </p>
          <input required type='text'
          name='lastName'
          onChange={changeHandler}
          placeholder='Enter last name'
          value={formData.lastName}></input>
        </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input required type='email'
          name='email'
          onChange={changeHandler}
          placeholder='Enter Email'
          value={formData.email}></input>
        </label>



        <div>
        <label>
          <p>
            Password<sup>*</sup>
          </p>
          <input required type={showPassword? 'text' : 'password'}
          name='password'
          onChange={changeHandler}
          placeholder='Enter password'
          value={formData.password}>
          </input>
          <span onClick={()=> setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
        </label>

        <label>
          <p>
            Last name<sup>*</sup>
          </p>
          <input required type={showPassword? 'text' : 'password'}
          name='confirmPassword'
          onChange={changeHandler}
          placeholder='Confirm Password'
          value={formData.confirmPassword}>
          </input>
          <span onClick={()=> setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
        </label>
        </div>
        <button>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm;