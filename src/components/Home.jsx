import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GradientIcon from "./GradientIcon";
import {CONTACT} from "../constants"

function Home() {
  function sendEmail(){
    window.location = `mailto:${CONTACT.email}`;
  }


    return (
        <div id='home' className='section'>
            <div className="flex flex-col gap-5 p-5 mt-5 md:mt-0">
                <h1 className="text-9xl ">Hello, I'm Vichet Chim<span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">!</span></h1>
                <h3 className="text-5xl -mt-12">A <span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">Web Developer</span></h3>
                <div className="flex flex-row gap-5">
                <button
              type="button"
              onClick={sendEmail}
              className=" border border-white font-semibold p-3 min-w-32 text-center relative overflow-hidden hover:text-black transition-colors duration-300 group cursor-pointer hover:border-black"
            >
              CONTACT NOW
              <span
                aria-hidden="true"
                className="bg-custom-gradient absolute  inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1]"
              ></span>
            </button>
                <button
              type="button"
              className="border border-white font-semibold p-3 min-w-32 text-center relative overflow-hidden hover:text-black transition-colors duration-300 group cursor-pointer hover:border-black"
            >
              DOWNLOAD RESUME
              <span
                aria-hidden="true"
                className=" bg-custom-gradient absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1] "
              ></span>
            </button>
                </div>
                <div className="flex flex-row gap-5 ">
                <a href={CONTACT.github} target="_blank">
                    <GradientIcon icon={FaGithub}/>
                </a>
                <a href={CONTACT.linkedin} target="_blank">
                    <GradientIcon icon={FaLinkedin}/>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Home;