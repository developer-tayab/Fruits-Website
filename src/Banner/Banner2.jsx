import React from "react";
import banner2 from "../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../utility/Animation";

export default function Banner2() {
  return (
    <section className=" ">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
    

        {/* {brand info} */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] ">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="text-3xl lg:text-6xl font-bold uppercase ">
             Online Fruit Store
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
              <button className="primary-btn">Download App</button>
            </motion.div>
          </div>
        </div>
            {/* {image section} */}
            <div className="flex justify-center items-center">
          <motion.img
          initial={{opacity:0 , x:200,rotate:75}}
          whileInView={{opacity:1 , x:0,rotate:0}}
          transition={{ duration:1, delay:0.2}}
            src={banner2}

            alt={"banner"}
            className="w-[300px] md-max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
}
