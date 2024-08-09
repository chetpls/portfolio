import React from "react";
import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div id='projects' className='section'>
            <div className="flex flex-col gap-5 w-full p-5">
                
                <div className="flex flex-col gap-5"><h1 className="text-5xl text-center font-bold">FEATURED <span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">PROJECTS</span></h1>
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} {...project}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;