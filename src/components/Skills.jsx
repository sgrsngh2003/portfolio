import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const skills = [
    {
        name: "Javascript",
        icon: <IoLogoJavascript className="text-yellow-400 "/>,
    },
    {
        name: "React",
        icon: <FaReact className="text-blue-500 "/>
    },
    {
        name: "Nodejs",
        icon: <FaNodeJs className="text-green-500 "/>
    },
    {
        name: "Express",
        icon: <SiExpress className="text-white"/>
    },
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500"/>
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500"/>
    },
    {
        name: "Postgres",
        icon: <BiLogoPostgresql className="text-sky-300"/> 
    },
    {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-blue-400"/>
    },
    {
        name: "MySQL",
        icon: <GrMysql className="text-blue-400"/>
    }
]

export default function(){
    return <div id="skill" className="mt-24 ">
        <div className=" text-slate-300 font-semibold text-xl pb-4">
            SKILLS
        </div>
        <div className="flex flex-wrap justify-center">
            {skills.map((skill, i) => {
                return <Skill
                key={i}
                name= {skill.name}
                icon= {skill.icon}
                />
            })}
    </div>
    </div>
}

function Skill({name, icon}){
    return <div className=" p-4">
        <div className="flex items-center gap-x-2 px-4 bg-gray-800 py-2 rounded-md w-36 border-b-4 border-r-4 border-purple-900 text-lg">
            {icon}
            <div className="text-slate-300 text-base">
                {name}
            </div>
        </div>
    </div>
}