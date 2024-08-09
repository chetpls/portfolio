import React from "react";
import { ABOUT_TEXT } from "../constants";
function About() {
    return (
        <div id='about' className='section'>
            <div className="flex flex-col gap-5 p-5">
                <div className="flex flex-col gap-10 p-5 lg:px-28 ">
                <h1 className="text-5xl text-center font-bold p-5  ">ABOUT <span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">ME</span></h1>
                    <p className="text-wrap text-2xl text-start px-5 md:px-10 md:text-3xl  lg:text-center">{ABOUT_TEXT}</p>
                </div>
                {/* <ScrollCarousel  /> */}
                <div className="flex flex-col flex-1 gap-5 p-5">
                <h1 className="text-5xl text-center font-bold"><span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">TECHNOLOGY</span> STACK</h1>
                        <div className="w-full grid grid-cols-4 gap-y-10 place-items-center p-5 " >
                            <img src="./javascript.svg" alt="" className="w-14 h-14 self-end" />
                            <img src="./html.svg" alt="" className="w-14 h-14"/>
                            <img src="./css.svg" alt="" className="w-14 h-14"/>
                            
                            <img src="./react.svg" alt="" className="w-14 h-14"/>
                            <img src="./git.svg" alt="" className="w-14 h-14"/>
                            <img src="./nodejs.svg" alt="" className="w-14 h-14"/>
                            <img src="./expressjs.svg" alt="" className="w-14 h-14"/>
                            <img src="./mongodb.svg" alt="" className="w-14 h-14"/>
                            
                           
                        </div>
                </div>
            </div>  
        </div>
    );
}

export default About;
