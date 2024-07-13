import React from "react"

const projects = [
    {
        name: "Blogging Website",
        description: "Web app to share your blogs and reads other blogs",
        tech: "Hono , Javascript , TypeScript, Reactjs, Prisma, Tailwind",
        link: "https://github.com/sgrsngh2003/blog-website"
    },
    {
        name: "Miscellaneous",
        description: "Created this frontend and backend to edit and delete the information",
        tech: "Javascript , Nodejs, Reactjs, Mongoose, Tailwind",
        link: "https://project-frontend-blush.vercel.app/"
    },
    {   
        name: "UI",
        description: "Created a UI for applying to a internship",
        tech: " Reactjs, Tailwind",
        link: "https://project-3001a.web.app/"
    },
    {
        name: "Miscellaneous",
        description: "Build UI and backend",
        tech: "Javascript , Nodejs, Reactjs, Mongoose, Tailwind",
        link: "https://quad-frontend-xi.vercel.app/"

    }
]

export default function(){
    return <div id="project" className="mt-32 lg:mb-24">
        <div className=" text-slate-300 font-semibold text-xl pb-4">
            PROJECTS
        </div>
        {projects.map((project,i) => {
            return <Project
                key= {i}
                name= {project.name}
                description= {project.description}
                tech = {project.tech}
                link= {project.link}
            />
        })}
    </div>
}

function Project({name, description, tech, link}){
    return <div className="text-slate-400 tracking-wider rounded-md lg:hover:bg-slate-800 p-4 lg:cursor-pointer">
        <a href= {link} target="_blank" rel="noopener noreferrer">
            <div className="text-slate-300 text-lg mb-2 cursor-pointer hover:text-teal-400">
                {name}
            </div>
        </a>
        <div>
            {description}        
        </div>
        <div>
            {`Tech Used- ${tech}`}
        </div>
    </div>
}