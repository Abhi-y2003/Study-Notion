import React from 'react'
import frame from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";
import photo from '../assets/photo.png'

const Template = ({title, des1 , des2, image, formtype, setLogedIn}) => {
    console.log(formtype);
  return (
    <div className='flex justify-between max-w-[1160px] w-11/12 py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='text-white w-11/12 max-w-[450px]'>
            <h3 className='font-semibold text-[1.75rem] leading-[2.375rem]'>{title}</h3>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-gray-300'>
                    {des1}
                </span>
                <br/>
                <span className='text-blue-400 italic'>
                    {des2}
                </span>
            </p>

            
            {formtype === "Login"? 
            <LoginForm setLogedIn={setLogedIn}/>:
            <SignupForm setLogedIn={setLogedIn}/>}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-gray-600'></div>
            <p className='text-gray-700 font-medium leading-[1.375rem]'>OR</p>
            <div className='w-full h-[1px] bg-gray-600'></div>

        </div>

        <button className='flex justify-center items-center w-full rounded-[8px] font-medium
        text-gray-400 border border-gray-700 px-[12px] py-[8px] gap-x-2 mt-6'>
            <FcGoogle/>
            Signup with Google</button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt='pattern'
            width={588} height={504}
            loading='lazy'
            ></img>

           <img src={photo} alt='student'
            width={588} height={504}
            loading='lazy'
            className='absolute -top-4 right-4'></img>
        </div>
    </div>
  )
}

export default Template