import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export function AccordionVariant() {
  return (
    <div className='flex flex-col justify-start items-start max-w-7xl pl-7 pb-12 mx-auto'>
       <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pb-12">
             Topic
            </h1>
      <Accordion
        className="flex w-full flex-col"
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        variants={{
          expanded: {
            opacity: 1,
            scale: 1,
          },
          collapsed: {
            opacity: 0,
            scale: 0.7,
          },
        }}
      >
        {accordionData.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
              <div className="flex items-center py-2">
                <ChevronRight  className={`h-7 w-7 text-blue-500 font-bold transition-transform duration-200 group-data-[expanded]:rotate-90`}  />
                <motion.div
                  className="ml-2 sm:text-5xl text-3xl text-zinc-950"
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-gray-800 text-xl  sm:text-2xl">
                {item.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const accordionData = [
  {
    value: "1",
    title: "Meta ADS Track",
    content: "Kick off your experience by setting up Motion-Primitives. This section covers the basics of installation and how to add animations to your projects. You'll get familiar with the initial setup and the core features quickly."
  },
  {
    value: "2",
    title: "Google ADS Track",
    content: "Discover a variety of properties to customize your animations. Learn to adjust timing, easing, and delays for smoother effects. This guide will help you tailor these settings to your app's needs."
  },
  {
    value: "3",
    title: "Native ADS Track",
    content: "Advance your skills by using more complex functions of Motion-Primitives. Explore how to link animations together, create intricate sequences, and interact with motion sensors for dynamic effects."
  },
  {
    value: "4",
    title: "Tiktok Track",
    content: "Connect with the Motion-Primitives community for support and collaboration. Learn how to contribute, share knowledge, and access helpful resources. Stay updated on new updates and collective insights."
  },
   {
    value: "5",
    title: "IGaming Track",
    content: "Connect with the Motion-Primitives community for support and collaboration. Learn how to contribute, share knowledge, and access helpful resources. Stay updated on new updates and collective insights."
  },
   {
    value: "6",
    title: "Affilate Marketing Hottest Topics",
    content: "Connect with the Motion-Primitives community for support and collaboration. Learn how to contribute, share knowledge, and access helpful resources. Stay updated on new updates and collective insights."
  }
];