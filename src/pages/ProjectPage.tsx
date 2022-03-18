import React, {useEffect, useRef} from 'react';
import remi from '../asssets/remi.gif';
import galactic from '../asssets/GalacticEmpire.gif';
import frest from '../asssets/frest.mp4';
import ProjectDescription from "../components/ProjectDescription";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects: project[] = [
    {
        title: "Remi the cooking assistant",
        description: "Born out of a 48h hackathon to teach AI how to cook. Together with a great team of three other inspiring hackathonees, we developed a creative AI-based cooking assistant that generates new recipes based on personal preferences and interactively guides chefs through each step of the recipe.\n\nTo achieve this, we used OpenAI's GPT-3, one of the most powerful NLP models in the world, and combined it with Google's Flutter framework to quickly prototype our cooking assistant named Remi. Astonishingly, Remi is not only able to invent new, never-before-seen recipe creations, but also dynamically adjust the recipe when ingredients are missing. The resemblance to a well-known French rat is, of course, purely coincidental.",
        stack: [
            {name: "GPT-3", share: 70},
            {name: "Dart", share: 25},
            {name: "Cookbooks", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/GPT-3-Recipe-Generator"
    },
    {
        title: "frest.info",
        description: "A tool that brings joy to homeowners lost in the German bureaucratic jungle. Developed during my three-month journey at the Digital Product School, a full-time programme at UnternehmerTUM GmbH to gain hands-on experience in discovering business opportunities and developing digital products that users love.\n\nTogether with an interdisciplinary team, we were challenged by Interhyp AG to simplify energy-efficiency renovations in Germany and make them a joyful experience for homeowners. Using a decision tree with extensive research into German subsidy guidelines, we developed a website that offers homeowners individual advice on energy-efficient renovations and their subsidy options, thus contributing to a more sustainable housing sector in Germany.",
        stack: [
            {name: "ReactJS", share: 50},
            {name: "Kubernetes", share: 20},
            {name: "NodeJS", share: 15},
            {name: "Docker", share: 10},
            {name: "Python", share: 5}
        ],
        liveLink: "https://frest.info/"
    },
    {
        title: "Galactic Empire",
        description: "A Christmas surprise and family co-production. Deeply rooted in the retro gaming scene, Galactic Empire is a reverse-engineered version of the same 1985 game. Implemented in C and cross-compiled via CC65 into 6502 Assembly compatible .c64 executables, Galactic Empire is engineered to natively run on a VICE powered raspberry pi build into a rebuild of the original Commodore 64. Caution, similar addictive and strife sowing potential as Monopoly.",
        stack: [
            {name: "C", share: 90},
            {name: "Makefile", share: 5},
            {name: "Pixel counting", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/galactic-empire-pi"
    },
]

export default function ProjectPage() {

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, []);

    const addToRefs = (elem: any) => {
        // @ts-ignore
        if (elem && !revealRefs.current.includes(elem)) {
            // @ts-ignore
            revealRefs.current.push(elem);
        }
    };

    return (
        <div>
            <p ref={addToRefs} className="text-mobile-heading md:text-heading pl-10">Stories.</p>
            <hr ref={addToRefs} className="border-black border bg-black ml-10 mr-10 md:mr-20"/>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-12 m-7 md:m-20 items-center justify-items-center">
                <img ref={addToRefs} className="rounded-[50px] md:rounded-[62px]" src={remi} alt="Remi the Cooking Assistant"/>
                {ProjectDescription(projects[0], addToRefs)}
                <video className="md:hidden" controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                {ProjectDescription(projects[1], addToRefs)}
                <video ref={addToRefs} className="hidden md:block object-cover" style={{width: "90%"}} controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <img ref={addToRefs} className="object-cover" style={{width: "90%"}} src={galactic} alt="Galactic Empire retro game"/>
                {ProjectDescription(projects[2], addToRefs)}
            </div>
        </div>
    )
}