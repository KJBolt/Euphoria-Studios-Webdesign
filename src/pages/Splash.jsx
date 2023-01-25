import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../spinner.css';

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000)
  }, [navigate])

  return (
    <div className='flex flex-grow flex-1 items-center justify-center h-screen'>
      <div className='flex flex-col items-center'>
        <img src={require('../assets/logo1.jpg')} alt="Logo" height={200} width={200} />
        <span className="loader"></span>
      </div>
    </div>
  )
}

export default Splash
