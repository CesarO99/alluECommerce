import React, { useState } from 'react'
import logo2 from "../images/logo2.png"
import { Link } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa"
import { BsCartFill } from "react-icons/bs"
import { useSelector } from 'react-redux'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=>state.user)
  const handleShowMenu = ()=> {
    setShowMenu(preve => !preve)
  }

  const cartItemNumber = useSelector((state)=> state.productSliceReducer.cartItem)

  return (
    <header className="fixed shadow-md w-full h-16 px-3 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className='flex items-center h-full justify-between'>
        <Link to={""}>
          <div className='h-10'>
            <img src={logo2} className='h-full' />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}><BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              {cartItemNumber.length}
            </div>
            </Link>
          </div>
          <div className="text-1xl cursor-pointer text-slate-600" onClick={handleShowMenu}>
            <div className="border-2 border-solid border-slate-600 p-1 rounded-full">
              <FaUserAlt />
            </div>
            {

              showMenu && (
                <div className="absolute right-2 bg-white py-2 px-2 shadow-md flex flex-col">
                  <Link to={"login"} className="whitespace-nowrap cursor-pointer">Login</Link>
                </div>
              )}
          </div>
        </div>
      </div>


      {/* mobile */}

    </header>
  )
}

export default Header