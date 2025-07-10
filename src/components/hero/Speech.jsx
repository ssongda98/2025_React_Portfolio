import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className='text-[1.5rem] font-medium mt-4'>
      <span>I&apos;m a </span>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Creative Problem Solver",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Frontend Developer",
          1000,
          "UX/UI Designer",
          1000,
          "Adaptable Team Player",
          1000,
          "Fast Learner 🚀",
          1000,
        ]}
        wrapper="span"
        speed={30}
        repeat={Infinity}
        className='padding-b-[10px] border-b-2 border-rose-200'
      />
    </div>
  );
};

export default Speech;
