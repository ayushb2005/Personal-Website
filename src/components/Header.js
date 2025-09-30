import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-12 px-4'> 
            <button onClick={() => navigate('/')} className='border-none outline-none bg-transparent font-bold text-xl sm:text-2xl text-center'>Ayush Bhanushali</button>
            <div className='flex flex-wrap justify-center gap-4'>
                <button onClick={() => navigate('/about')} className='border-none outline-none bg-transparent'>About</button>
                <button onClick={() => navigate('/projects')} className='border-none outline-none bg-transparent'>Projects</button>
                <button onClick={() => navigate('/resume')} className='border-none outline-none bg-transparent'>Resume</button>
            </div>
        </div>
    );
};
export default Header;