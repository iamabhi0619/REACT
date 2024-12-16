import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nev() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken("");
  };
  return (
    <nav className='flex items-center justify-between p-6 bg-cyan-200'>
      <div>Logo</div>
      <div>{token ? "Logged In" : "Not Logged In"}</div>
      {token ? (
        <div>
          <p 
            onClick={handleLogout} 
            className='mr-5 bg-blue-300 px-3 py-1 text-xl rounded-full cursor-pointer'
          >
            Log Out
          </p>
        </div>
      ) : (
        <div className='flex'>
          <p 
            onClick={() => navigate('/login')} 
            className='mr-5 bg-blue-300 px-3 py-1 text-xl rounded-full cursor-pointer'
          >
            Login
          </p>
          <p 
            onClick={() => navigate('/signup')} 
            className='mr-5 bg-red-300 px-3 py-1 text-xl rounded-full cursor-pointer'
          >
            Sign Up
          </p>
        </div>
      )}
    </nav>
  );
}

export default Nev;