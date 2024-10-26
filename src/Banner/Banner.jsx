import React from "react";
import banner from "../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/Animation";
export default function Banner() {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* {image section} */}
        <div className="flex justify-center items-center">
          <motion.img
          initial={{opacity:0 , scale:0.5}}
          whileInView={{opacity:1 , scale:1}}
          transition={{type:"spring" , duration:1, stiffness:200 , delay:0.2}}
          viewport={{once:true}}
            src={banner}

            alt={"banner"}
            className="w-[300px] md-max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>

        {/* {brand info} */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] ">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="text-3xl lg:text-6xl font-bold uppercase ">
              Brand Info
            </motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              nostrum explicabo et optio odit magnam cumque sit velit aperiam
              totam!
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              voluptatibus vel laudantium, aliquam quisquam provident facilis
              tempora dolorem aspernatur nam tenetur, cupiditate dolore culpa
              quidem quia magni ea. Dolor, sint.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
