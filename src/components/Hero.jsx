"use client";
import React from "react";
import { motion } from "framer-motion";
import { globeConfig, sampleArcs } from "../constents/varGlobe";
import { FlipWords } from "./ui/flip-words";
import { Button, Rating } from "@material-tailwind/react";
import video from '../assets/Hero.mp4'
import { Nav } from "./Nav";
const World = React.lazy(() => import("./ui/globe").then((module) => ({ default: module.World })));
export function Hero() {
const words = ["Affiliate Networks", "Advertisers", "Ecommerce Marketers", "Affiliate Marketing","Traffic Sources"];
  return (
<>
  <div className="relative isolate h-screen overflow-hidden pt-2 bg-black ">
    <video  className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" loop autoPlay muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <Nav/>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 ">
          <div className=" sm:mb-8 sm:flex flex-col items-center sm:justify-start">
            <h2 className="text-center text-2xl md:text-4xl max-w-5xl  mb-2  uppercase font-semibold drop-shadow-md text-white">Zep Research</h2>
            <br />
            <h2 className="text-center text-5xl md:text-7xl max-w-5xl  mb-2  uppercase font-extrabold drop-shadow-md text-white ">Budapest</h2>
           
          </div>
          <div className="text-center">
           <motion.div
        initial={{
          opacity: 0,
          y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            }}
            transition={{
              duration: 1,
            }}
              className="div"
              >
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center text-xl md:text-5xl   mt-8  font-bold text-white">
              The largest meeting place for the worlds top<br />
              <FlipWords words={words} className={"mt-2 "} />
              </h2>
              </div>
              <p className="text-center text-base md:text-lg font-normal  text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              
              
              </p>
              </motion.div>
            <div className="flex flex-row gap-3 my-8 items-center justify-center py-4 border border-white text-white font-semibold rounded-full mt-8 sm:w-2/6 mx-auto">
              <Rating value={4} readonly />
              <h1>4.8</h1>
              <h1>★TrustPilot</h1>
            </div>
            <Button size="lg" variant="gradient" color="yellow" className="drop-shadow-md text-gray-900 my-2 sm:my-12">Buy Tickets</Button> 
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-">
        
              
              </div>
              
              
             
    </div>
              */}
  </>
  );
}
