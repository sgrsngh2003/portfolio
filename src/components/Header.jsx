import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


import { Link } from "react-scroll";

const detail= {
    name: "Sagar Singh Painwal",
    title: "Full Stack Developer",
    quote: "Turning ideas into reality, one line of code at a time.",
    github: "https://github.com/sgrsngh2003",
    linkedIn: "https://www.linkedin.com/in/sgrsngh2003",
    twitter: "https://x.com/sgrsngh2003",
    mail: "mailto:sgrsngh2003@gmail.com"
}

export default function(){
    return <div className="text-white ">
        <div className="lg:hidden text-4xl md:text-5xl font-semibold text-slate-200">
            {detail.name}
        </div>
        <div className="hidden lg:block text-4xl md:text-5xl font-semibold text-slate-200">
            Sagar Singh
        </div>
        <div className="hidden lg:block pt-4 text-4xl md:text-5xl font-semibold text-slate-200">
            Painwal
        </div>
        <div className="pt-4 text-lg md:text-xl font-semibold text-slate-300">
            {detail.title}
        </div>
        <div className="pt-2 text-base font-medium text-slate-400">
            {detail.quote}
        </div>
        <div className="hidden lg:visible pt-24 lg:grid grid-rows-3 gap-y-3 text-slate-400">
            <div>
                <Link className = 'cursor-pointer'
                
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    offset={-120}
                      
                >
                    ABOUT
                </Link>
            </div>
            <div>
                <Link 
                    className="cursor-pointer"
                    to= "skill"
                    spy= {true}
                    smooth= {true}
                    duration={500}
                    offset={-120}
                >
                    SKILLS
                </Link>
            </div>
            <div>
                <Link className="cursor-pointer"
                    
                    to= "project"
                    spy= {true}
                    smooth= {true}
                    duration={500}
                    offset={-120}
                >
                    PROJECTS
                </Link>
            </div>
        </div>
        <div className="flex gap-x-3 text-2xl mt-8 lg:mt-48">
            <a href={detail.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> 
            </a>
            <a href={detail.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href={detail.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare />
            </a>
            
        </div>
    </div>
}