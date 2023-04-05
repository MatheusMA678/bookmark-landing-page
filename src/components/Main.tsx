import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Illustration from "../../public/images/illustration-hero.svg";

const backAnimation = {
  initial: {
    x: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const Main = () => {
  return (
    <main className="overflow-hidden mt-44 pb-10">
      <div className="relative">
        <img src={Illustration} alt="Illustration" />
        <motion.div
          initial={{
            x: 110,
            opacity: 0,
          }}
          animate={{
            x: 10,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1,
              delay: 1,
            },
          }}
          className="absolute w-4/5 h-4/5 rounded-l-full bg-primary-softBlue right-0 -bottom-4 -z-10"
        ></motion.div>
      </div>
      <section className="text-center mt-28 flex flex-col gap-8">
        <h1 className="font-[500] text-4xl">A Simple Bookmark Manager</h1>
        <p className="max-w-[350px] m-auto text-neutral-grayishBlue">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center items-center gap-8">
          <button className="py-4 px-6 font-[500] text-lg text-white bg-primary-softBlue rounded-lg shadow-lg hover:bg-primary-softBlue/90 transition">
            Get it on Chrome
          </button>
          <button className="py-4 px-6 font-[500] text-lg bg-neutral-grayishBlue/10 shadow-lg rounded-lg">
            Get it on Firefox
          </button>
        </div>
      </section>
    </main>
  );
};
