import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Counter from "./Counter";
import MacbookModelContainer from "./macbook/MacbookModelContainer";
import "./services.css";
import SkillsMarquee from "./SkillsMarquee";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      ref={ref}
      className="services h-full flex flex-col items-center justify-evenly md:justify-around"
    >
      <div className="flex flex-col lg:flex-row items-center gap-[100px]">
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="w-full lg:w-1/2"
        >
          <motion.h2
            variants={textVariants}
            className="text-5xl xl:text-7xl font-semibold"
          >
            How do I help?
          </motion.h2>
          <motion.p variants={textVariants} className="mt-[50px]">
            With a background in web and software development, UX/UI, and
            graphic design, I bring both technical precision and visual
            intuition to my work. Having collaborated closely with marketing
            teams, I understand how to align user needs with business goals.
            These diverse experiences allow me to approach projects
            holistically—from concept to launch—with creativity, strategy, and
            clarity.
          </motion.p>
          <div className="mt-[50px] counterList flex justify-between">
            <Counter
              from={0}
              to={10}
              text={
                <>
                  Years in
                  <br />
                  Web Design
                </>
              }
            ></Counter>
            <Counter
              from={0}
              to={3}
              text={
                <>
                  Years in
                  <br />
                  Web Development
                </>
              }
            ></Counter>
            <Counter
              from={0}
              to={50}
              text={
                <>
                  Projects
                  <br />
                  Successfully Delivered
                </>
              }
            ></Counter>
          </div>
        </motion.div>
        <div className="w-1/2 hidden lg:block">
          <MacbookModelContainer />
        </div>
      </div>
      <SkillsMarquee />
    </div>
  );
};

export default Services;
