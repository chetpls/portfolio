import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ title, image, description, stack, github, demo }) {
  return (
    <div className="bg-[#1c1c2c] rounded-lg shadow-md overflow-hidden flex flex-col gap-5 lg:flex-row">
      <img
        src={image}
        alt=""
        className="w-[30rem] h-auto object-cover  self-center "
      />
      <div className="p-4 flex flex-col flex-2 justify-evenly">
        <h3 className="text-5xl font-semibold mb-2 bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">
          {title}
        </h3>
        <p className="text-white mb-2">{description}</p>
        <div className="mb-2 flex flex-row justify-center lg:justify-start gap-3">
        <button className="flex flex-row bg-[#141414] px-5 py-2 rounded-lg hover:bg-custom-gradient hover:text-[#141414]"><a className="flex flex-row gap-2 text-lg items-center" href={github}target="_blank">Github <FaGithub /></a></button>
        <button className="flex flex-row bg-[#141414] px-5 py-2 rounded-lg hover:bg-custom-gradient hover:text-[#141414]"><a className="flex flex-row gap-2 text-lg items-center" href={demo} target="_blank">Live <FaExternalLinkAlt /></a></button>

          
        </div>
        <div className="flex flex-wrap gap-2 self-center lg:self-start">
          {stack.map((item, index) => (
            <span key={index}>
              <img src={item} alt="" className="w-10 h-10" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
