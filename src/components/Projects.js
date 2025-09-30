import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Projects = () => {
    const projectsData = [
        {name:"Cashbackify", description: "", reason: "", github:"", year:""},
        {name:"IndividualInfo", description: "", reason: "Auth API for Tutoring", github:"https://github.com/ayushb2005/Invidual-InfoAPI", year:""},
        {name:"RapidCart", description: "", reason: "FullStack E-commerce Store", github:"https://github.com/ayushb2005/RapidCart", year:""},
        {name:"Medical", description: "", reason: "Medical Recommendation System", github:"https://github.com/ayushb2005/FinalProjectMedical", year:""}
    ]
    return (
        <div>
            <Header/>
            <br></br>
            <div className="max-w-xl mx-auto px-4">
            {projectsData.map((project) => (
          <div className='max-w-md text-left mx-auto text-sm sm:text-base md:text-md lg:text-lg py-2' key={project.name}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1'>
                    <h3 className="text-base font-medium">{project.name}</h3>
                    <h3 className="text-sm text-gray-600">{project.reason}</h3>
                </div>
              </a>
            )}
          </div>
        ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;