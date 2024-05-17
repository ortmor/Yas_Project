import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageNotFound1() {
    const navigate=useNavigate();

    const handleHome = () => {
        navigate('/')

      };  
      
      return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/404.jpg' alt="404 page not found" style={{ maxWidth: '100%', maxHeight: '80vh', marginBottom: '20px' }} />
            <button className="extra-button1" onClick={handleHome}>
            <h3>Go To Home</h3>
          </button>            
        </div>
    )
}

export default PageNotFound1