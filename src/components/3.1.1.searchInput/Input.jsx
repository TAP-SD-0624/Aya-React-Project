import React from 'react'
import './Input.css'

const Input = () => {
  return (

    <>
    <div>
    <form action="action_page.php"> 
        <button type="submit " className='searchBtn'>🔎</button>
        <input className="searchSpace" type="text" placeholder="Search the Website..." name="search"></input> 
        </form>
    </div>
    </>
    
    )
}

export default Input