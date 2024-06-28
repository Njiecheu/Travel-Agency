// import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { MdOutlineModeOfTravel } from 'react-icons/md'
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {
    //toggle/show navbar
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    const removeNav = () => {
        setActive('navBar')
    }

    //add background to header
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
            <a href="#" className="logo">
                <h1 className='flex'><MdOutlineModeOfTravel className='icon'/>Travel</h1>
            </a>
        </div>
        <div className={active}>
            <ul className="navLists flex">
                <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink">Products</a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink">Resources</a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink">Contact</a>
                </li>
                <li className="navItem">
                    <a href="#" className="navLink">Blog</a>
                </li>
                <div className="headerBtns flex">
                    <button className="btn loginBtn">
                        <a href="#">Login</a>
                    </button>
                    <button className="btn">
                        <a href="#">Sign up</a>
                    </button>
                </div>
            </ul>
            <div className="closeNavbar" onClick={removeNav}>
                <AiFillCloseCircle className='icon'/>
            </div>
        </div>
        <div className="toggleNavbar" onClick={showNav}>
            <BsGrid3X3GapFill className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Navbar
