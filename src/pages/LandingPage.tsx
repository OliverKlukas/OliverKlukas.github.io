import React from 'react';
import {ScrollLogo} from "../asssets/SVGs";

export default function LandingPage() {
    return(
        <div className="flex flex-col min-h-screen bg-green-4 justify-evenly items-center">
            <div/>
            <p className="text-mobile-subheading md:text-subheading max-w-md text-white text-center">Stories to scroll through.</p>
            <div className="animate-bounce">
                <ScrollLogo/>
            </div>
        </div>
    )
}