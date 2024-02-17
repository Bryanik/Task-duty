import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navComponent'>
      <div className='navContainer'>
        <div className='logo'>
          <a href="/"><img src="/src/assets/logo.png" alt="Logo" /></a>
          <a href="/"><h2>TaskDuty</h2></a>
        </div>
        <div className='menu'>
          <nav>
            <ul>
              <li><Link to={"newtask"} className='navlink'>New Task</Link></li>
              <li><Link to={"mytasks"} className='navlink'>All Tasks</Link></li>
              <li><img src="/src/assets/displayPic.png" alt="Display Pic" /></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar