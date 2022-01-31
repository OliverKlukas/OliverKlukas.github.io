import React from 'react';
import {LinkButton} from "./Button";

declare global {
    type technology = {
        name: string;
        share: number;
    }
    type project = {
        title: string,
        description: string,
        stack: technology[],
        githubLink?: string,
        liveLink?: string
    }
}

const colors = ['bg-green-5', 'bg-green-4', 'bg-green-3','bg-green-2', 'bg-green-1']

export default function ProjectDescription(project : project, reference: React.LegacyRef<HTMLDivElement> | undefined) {
    return (
        <div className="flex flex-col md:min-h-screen justify-center space-y-4 md:w-[90%]" ref={reference}>
            <p className="leading-tight text-mobile-subheading md:text-subheading">{project.title}</p>
            <p className="text-mobile-standard md:text-standard whitespace-pre-line">{project.description}</p>
            <p className="text-mobile-paragraph md:text-paragraph pt-2">Tech Stack</p>
            <div className="flex w-[97%]">
                {project.stack.map((item, index) => (
                    <div style={{width: `${item.share}%`}} className={`first:rounded-l-lg last:rounded-r-lg h-4 ${colors[index]}`}/>
                ))}
            </div>
            <div className="grid grid-cols-2">
                {project.stack.map((item, index) => (
                    <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${colors[index]}`}/>
                        <div className="text-mobile-standard md:text-standard">{item.name}</div>
                        <div className="text-mobile-standard md:text-standard text-grey">{" " + item.share + "%"}</div>
                    </div>
                ))}
            </div>
            <div className="flex pt-4 md:pt-7">
                {project.githubLink != null && LinkButton("GitHub", project.githubLink)}
                {project.liveLink != null && LinkButton("Live Version", project.liveLink)}
            </div>
        </div>
    );
}
