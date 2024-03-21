import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

    const isLogedIn =props.isLogedIn;
    const setLogedIn =props.setLogedIn

    
  return (
    <div className='flex justify-evenly'>

        <Link to="/"> <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/> 
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* login -- logout -- signin --dashboard */}

        <div className='flex gap-3 ml-3'> 

        { !isLogedIn &&
            <Link to='/login'>
            <button onClick={()=>{setLogedIn(true)
            }}>
                Login
            </button>
         </Link>
        }

           {!isLogedIn &&
            <Link to='/signup'>
                <button onClick={()=>{setLogedIn(true)}}>
                    signup
                </button>
            </Link>
            }

            { isLogedIn &&
                <Link to='/'>
                <button onClick={()=>{setLogedIn(false)
                toast.success("Loged out")}}>
                    Logout
                </button>
            </Link>
            }
            
            {isLogedIn &&
                <Link to='/dashboard'>
                <button>
                    Dashboard 
                </button>
            </Link>

            }
            
        </div>
    </div>
  )
}

export default Navbar