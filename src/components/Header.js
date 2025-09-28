import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center gap-4 md:gap-6 lg:gap-8 mt-20'> 
            <button onClick={() => navigate('/')} className='border-none outline-none bg-transparent font-bold text-2xl'>Ayush Bhanushali</button>
            <button onClick={() => navigate('/about')} className='border-none outline-none bg-transparent'>About</button>
            <button onClick={() => navigate('/projects')} className='border-none outline-none bg-transparent'>Projects</button>
            <button onClick={() => navigate('/resume')} className='border-none outline-none bg-transparent'>Resume</button>
        </div>
    );
};
export default Header;