import React from 'react';
import {getRandomInt} from "../utils/random";

/**
 * Single year card used for loading screen animation.
 *
 * @param {{ year : string, anecdote : string}} props - Year and anecdote that should be displayed on card.
 * @constructor
 */
export default function YearCard(props: { year: string, anecdote: string }) {
    const rotation: string[] = ['rotate-2', 'rotate-6', 'rotate-12', 'rotate-0', '-rotate-2', '-rotate-6', '-rotate-12'];
    return (
        <div className="absolute">
            <div
                className={`grid grid-cols-1 bg-white content-center gap-10 ${rotation[getRandomInt(7)]} h-[380px] md:h-[430px] lg:h-[470px] w-[250px] md:w-[290px] lg:w-[330px] border-[#02242D] border-[15px] rounded-lg shadow-2xl`}>
                <p className="text-subheading text-center">{props.year}</p>
                <p className="text-standard text-center">{props.anecdote}</p>
            </div>
        </div>
    );
}