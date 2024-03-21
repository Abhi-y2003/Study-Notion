import React from 'react'
import Template from '../components/Template'
import photo from '../assets/photo.png'

const Login = ({setLogedIn}) => {
  return (
    <div>
      <Template 
      title='Welcome Back'
      des1='Build skills for today, tommoroe and betond'
      des2='Education to Future-proof career'
      image={photo.png}
      formtype="Login"
      setLogedIn={setLogedIn}/>
      
    </div>
  )
}

export default Login