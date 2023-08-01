import React from "react";
import vid from "../stockvid/kid_wandering.mp4"
import Typewriter from 'typewriter-effect';
import img from "../stockvid/kid picking trash.webp"



function Landing() {

    'use client';
    return (
        <div className="flex flex-col bg-black h-screen">
          

            
            <div class="relative overflow-hidden bg-black mt-10 ">
                <video class=" h-[500px] opacity-50 w-screen contrast-150 blur-sm backdrop-opacity-60 saturate-50" src={vid} autoPlay
                    loop
                    muted />

                <div class="absolute top-0 left-0 px-6 py-4">
                   
                    <p class=" mt-[80px] text-white leading-normal text-6xl text-stone-50 font-bold drop-shadow-2xl h-24"> 
                     <Typewriter
                        options={{
                            strings: ['Despite many government schemes and programs about 8.5 crore children between ages 5-7 do not go to school due to financial crisis said social activists'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                    </p>

                </div>
            </div>

            <div className="mt-24">
                
            
            
            </div>
        </div>

    );
}

export default Landing;
