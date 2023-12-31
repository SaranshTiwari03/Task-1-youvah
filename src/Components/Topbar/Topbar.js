import React from 'react'
import './Topbar.css';
import CW1 from '../Assets/CW-1.png';
import CW2 from '../Assets/CW-2.png';
import CW3 from '../Assets/CW1.1.png';
import CW4 from '../Assets/CW1.2.png';
import GE  from '../Assets/grahpic-element.svg';

function Topbar() {
  return (
       <div className='Topbar'>
        
         <picture >
         {/* <source 
          
          media="(max-width: 480px)"
          srcset={CW4}
          /> */}
          <source 
          
          media="(max-width: 768px)"
          srcset={CW3}
          />
          
          <img className='CW1' src={CW1} alt="" /> 
          
          </picture> 
          
          
          <div className="frame">
              <div className="div1 my-4">
              
            <p className="text-wrapper1">Ace Our Single Shot Challenge !</p>
            <img
          className="grahpic-element-icon"
          alt=""
          src={GE}
        />
            <p className="p">
              Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship Today!
            </p>
            <button style={{width: 251, height: 56, paddingTop: 12, paddingBottom: 8, paddingLeft: 24, paddingRight: 24, background: 'linear-gradient(90deg, #B25AFF 0%, #7A27CA 100%)', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: '#FDFBFF', fontSize: 18, fontFamily: 'Gilroy-Bold', fontWeight: '400', textTransform: 'capitalize', lineHeight: 20, wordWrap: 'break-word'}}>Take  A Free Assessment</div>
          </button>
          </div>
          
       </div>
       <picture>
          <source
          
          media="(max-width: 768px)"
          srcset=""
          />
          <img className='CW2' src={CW2} alt="" /> 
          
          </picture> 
       </div>
    
  )
}

export default Topbar
