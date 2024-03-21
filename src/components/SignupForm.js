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

   const[accountType , setAccountType] = useState("student")
  return (
    <div>
      {/*student instructor tab */}
      <div className='flex bg-gray-700 p-1 gap-x-10  rounded-full my-6 max-w-max '>
        <button className={`${accountType === "student"? "bg-gray-900 rounded-full py-2 px-5 transition-all duration-200": "bg-transparent py-2 px-3" }`} 
         onClick={()=>setAccountType('student')}>
          Student
        </button>
        <button className={`${accountType === "instructor"? "bg-gray-900 rounded-full py-2 px-5 transition-all duration-200": "bg-transparent py-2 px-3" }`}
         onClick={()=>setAccountType('instructor')}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        <div className='flex gap-x-4'>
        <label className='mt-4'>
          <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
            First name<sup className='text-pink-800'>*</sup>
          </p>
          <input required type='text'
          name='firstName'
          onChange={changeHandler}
          placeholder='Enter first name'
          value={formData.firstName}
          className='bg-gray-800 rounded-[0.5rem] w-full p-3'></input>
        </label>

        <label className='mt-4'>
          <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
            Last name<sup className='text-pink-800'>*</sup>
          </p>
          <input required type='text'
          name='lastName'
          onChange={changeHandler}
          placeholder='Enter last name'
          value={formData.lastName}
          className='bg-gray-800 rounded-[0.5rem] w-full p-3'></input>
        </label>
        </div>

        <label className='m-4'>
          <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-800'>*</sup>
          </p>
          <input required type='email'
          name='email'
          onChange={changeHandler}
          placeholder='Enter Email'
          value={formData.email}
          className='bg-gray-800 rounded-[0.5rem] w-full p-3'></input>
        </label>



        <div className='flex gap-x-4 mt-4'>
        <label className='relative'>
          <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-800'>*</sup>
          </p>
          <input required type={showPassword? 'text' : 'password'}
          name='password'
          onChange={changeHandler}
          placeholder='Enter password'
          value={formData.password}
          className='bg-gray-800 rounded-[0.5rem] w-full p-3'>
          </input>
          <span onClick={()=> setShowPassword((prev) => !prev)}
          className='absolute right-3 top-[41px] text-lg cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
        </label>

        <label className='relative'>
          <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-pink-800'>*</sup>
          </p>
          <input required type={showPassword? 'text' : 'password'}
          name='confirmPassword'
          onChange={changeHandler}
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          className='bg-gray-800 rounded-[0.5rem] w-full p-3'>
          </input>
          <span onClick={()=> setShowPassword((prev) => !prev)}
          className='absolute right-3 top-[41px] text-lg cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
        </label>
        </div>
        <button className='w-full bg-yellow-300 text-black font-medium
         rounded-[8  px] px-[12px] py-[8px] mt-6'>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm;