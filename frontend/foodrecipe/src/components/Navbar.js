import React from 'react'
import '../index.css'
function Navbar(){
    return <div>
        <img className="logo"
        src={process.env.PUBLIC_URL + 'nav_logo.png'}  
        alt="logo" />
        </div>
}

export default Navbar