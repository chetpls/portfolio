import React from "react";
import { CONTACT } from "../constants";
import InputField from "./InputField";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {

  const LinkedInIcon = () => {
    return (
      <div className="gradient-icon">
        <svg width="0" height="0">
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7e5bef" stopOpacity="1" />
            <stop offset="50%" stopColor="#5a31ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#3f00ff" stopOpacity="1" />
          </linearGradient>
        </svg>
        <FaLinkedin size={50}/>
      </div>
    );
  };
  const GithubIcon = () => {
    return (
      <div className="gradient-icon">
        <svg width="0" height="0">
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7e5bef" stopOpacity="1" />
          <stop offset="50%" stopColor="#5a31ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#3f00ff" stopOpacity="1" />
        </linearGradient>
        </svg>
        <FaGithub  size={50}/>
      </div>
    );
  };

  return (
    <div id="contact" className="section">
      <div className="flex  flex-col  gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-5xl text-center font-bold">
            <span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal mb-5">
              CONTACT
            </span>{" "}
            INFO
          </h1>
          <h3 className="text-xl">{CONTACT.phoneNo}</h3>
          <h3 className="text-xl">
            <a className="uppercase hover:bg-custom-gradient hover:inline-block hover:text-transparent hover:bg-clip-text" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </h3>
          <div className="flex flex-row gap-5 p-3 justify-center items-center">
            <a href={CONTACT.github} target="_blank">
              <GithubIcon  />
            </a>
            <a className="" href={CONTACT.linkedin} target="_blank">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-5xl text-center font-bold">
            GET IN{" "}
            <span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal mb-5">
              TOUCH
            </span>{" "}
          </h1>
            <form action={import.meta.env.VITE_FORMSPREE_KEY} method="post" className="flex flex-col gap-5">
            <InputField
              type="text"
              name="name"
              id="contact-name"
              placeholder="John Doe"
              label="Name"
            />
            <InputField
              type="email"
              name="email"
              id="contact-email"
              placeholder="JohnDoe@example.com"
              label="Email"
            />
            <InputField
              type="text"
              name="subject"
              id="contact-subject"
              placeholder="Subject"
              label="Subject"
            />
            <div className="relative w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                required
              ></textarea>
              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Message
              </label>
            </div>
            <button
              type="submit"
              className=" font-semibold p-3 min-w-32 text-center relative overflow-hidden hover:text-black transition-colors duration-300 group cursor-pointer"
            >
              SUBMIT
              <span
                aria-hidden="true"
                className="bg-custom-gradient absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-[-1]"
              ></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
