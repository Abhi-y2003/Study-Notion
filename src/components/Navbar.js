import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

    const isLogedIn =props.isLogedIn;
    const setLogedIn =props.setLogedIn

    
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/> 
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-white'>
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

        <div className='flex item-center gap-x-4 text-white '> 

        { !isLogedIn &&
            <Link to='/login'>
            <button  className='bg-[#12283A] py-[8px] px-[12px] 
            rounded-[8px] border-[#0D0415] text-gray-400'>
                Login
            </button>
         </Link>
        }

           {!isLogedIn &&
            <Link to='/signup'>
                <button className='bg-[#12283A] py-[8px] px-[12px]
                rounded-[8px] border-[#0D0415] text-gray-400'>
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