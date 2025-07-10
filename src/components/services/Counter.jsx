import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return ()=> animation.cancel();
  }, [isInView, from, to]);

  return (
    <div className="counter md:text-center" ref={ref}>
      <h1 className="text-[48px] font-semibold text-[#dd4c62]">{count}+</h1>
      <p className="text-sm max-w-[100px] md:max-w-full">{text}</p>
    </div>
  );
};

export default Counter;
