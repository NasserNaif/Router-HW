import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Nav() {
    const Navigate = useNavigate()
    return (
        <div className='nav'>
            <Link className='Link' to={"/About"}>About</Link>
            <br />
            <button onClick={() => Navigate("/")}>Home</button>
        </div>
    )
}

export default Nav