import React from 'react'
import Template from '../components/Template'
import photo from '../assets/photo.png'

const Signup = ({setLogedIn}) => {
  return (
    <div>
      <Template 
    title='Join the millions learning the code with studynotion for free'
    des1='Build skills for today, tommoroe and betond'
    des2='Education to Future-proof career'
    image={photo.png}
    formtype="Signup"
    setLogedIn={setLogedIn}
    /></div>
  )
}

export default Signup