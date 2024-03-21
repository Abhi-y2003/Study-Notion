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
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
                Email Address
                <sup className='text-pink-800'>*</sup>
            </p>
        
        <input required type='email' 
        name='email'
        placeholder='Enter Email Address'
        value={formData.email} onChange={changeHandler}
        className='bg-gray-800 rounded-[0.5rem] w-full p-3'> 

        </input>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem]'>
                Password
                <sup className='text-pink-800'>*</sup>
            </p>
        
        <input required 
        type={showPassword? 'text' : "password"} 
        name='password'
        placeholder='Enter Password'
        value={formData.password} onChange={changeHandler}
        className='bg-gray-800 rounded-[0.5rem] w-full p-3'> 

        </input>
        <span onClick={()=> setShowPassword((prev) => !prev)}
        className='absolute right-3 top-[38px] text-lg cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>

        <Link to="#">
            <p className='text-xs mt-1 text-blue-500 max-w-max ml-auto' >
              Forget Password
            </p>
        </Link>
        </label>

        <button className='w-full bg-yellow-300 text-black font-medium
         rounded-[8  px] px-[12px] py-[8px] mt-6'>
            Signin
        </button>


    </form>
  )
}

export default LoginForm