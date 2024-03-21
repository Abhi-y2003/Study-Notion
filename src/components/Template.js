import React from 'react'
import frame from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, des1 , des2, image, formtype, setLogedIn}) => {
    console.log(formtype);
  return (
    <div>

        <div>
            <h3>{title}</h3>
            <p>
                <span>
                    {des1}
                </span>
                <span>
                    {des2}
                </span>
            </p>

            
            {formtype === "Login"? 
            <LoginForm setLogedIn={setLogedIn}/>:
            <SignupForm setLogedIn={setLogedIn}/>}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>

        </div>

        <button>Signup with Google</button>
        </div>

        <div>
            <img src={frame} alt='pattern'
            width={588} height={504}
            loading='lazy'></img>

           <img src={frame} alt='student'
            width={588} height={504}
            loading='lazy'></img>
        </div>
    </div>
  )
}

export default Template