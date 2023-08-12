import React from 'react'
import './midframe.css';
import See from '../Assets/See where our students are interning.png';
import Comp from '../Assets/Frame 30479.png'

function Midframe() {
  const borStyle={
    width: '70%', height: 208, 
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    border: '0.50px black solid', 
    flexDirection: 'column', 
    alignItems: 'center',
     gap: 36, 
     display: 'inline-flex',
    borderRadius:'5px',
    position: 'relative',

  }

  return (
    <div className=''>
      <div className="mf1" style={borStyle}>
         <img className="img my-3" alt="See where our" src={See}/>
         <img className="img" alt="Frame" src={Comp} />
        </div>
    </div>
  )
}

export default Midframe
