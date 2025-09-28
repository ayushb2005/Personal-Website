import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Resume = () => {
    return (
        <div>
            <Header/>
            <div className="w-full h-screen flex justify-center items-center">
        <iframe
            src="/resume.pdf"
            className="w-[90%] h-[85%] rounded-2xl shadow-lg"
            title="Ayush Bhanushali Resume"
            style={{border:"none"}}
        />
      </div>
            <Footer/>
        </div>
    );
};

export default Resume;