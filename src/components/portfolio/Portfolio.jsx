import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import "./portfolio.css";
const items = [
  {
    id: 1,
    img: "/portfolio/p-clarke.jpeg",
    title: "Clarke Group – Property Investment Listing Platform",
    desc: "Clarke Group is a New Zealand-based property investment company. This was a client project where I built a custom WordPress website using PHP, featuring a tailored property listing system, detailed property pages, and an interactive “Sold/Sale” layout built with JavaScript for visual browsing. The site also includes a Mapbox integration for a seamless, map-based property overview.",
    link: "https://clarkegroup.co.nz/",
  },
  {
    id: 2,
    img: "/portfolio/p-selecthotels.jpeg",
    title: "Select Hotels - Global Luxury Hotel Search",
    desc: "I led the end-to-end creation of a global luxury hotel discovery platform for a client — from concept planning and UX/UI design to custom WordPress theme development using PHP. The platform features an elegant, high-end user interface optimized for responsive browsing, and includes a partner submission system that automatically publishes listings upon admin approval. This streamlined approach enhanced operational efficiency and delighted the client with both design quality and usability.",
    link: "https://select-hotels.sunnysong.me/",
  },
  {
    id: 3,
    img: "/portfolio/p-iphone.jpeg",
    title: "Interactive 3D Product Page – iPhone 15 Pro Concept",
    desc: "A visually rich, interactive web experience inspired by the Apple iPhone 15 Pro website. This project combines GSAP animations and Three.js-powered 3D effects to deliver dynamic transitions, smooth scroll interactions, and real-time 3D rendering. Through this build, I gained hands-on experience with custom animation timelines, 3D scene setup, and performance optimization techniques for web-based 3D content.",
    link: "https://3d-iphone.sunnysong.me/",
  },  
  {
    id: 4,
    img: "/portfolio/p-brainwave.jpeg",
    title: "Brainwave – Modern React Landing Page",
    desc:
      "A sleek, responsive landing page built with React.js and Tailwind CSS, showcasing advanced UI techniques such as parallax effects, bento-style layouts, and mobile-first design. This project allowed me to deepen my understanding of component-based architecture in React, utility-first styling with Tailwind CSS, smooth scroll and layout interactions, and responsive design best practices.",
    link: "https://brainwave.sunnysong.me/",
  }, 
  
  {
    id: 5,
    img: "/portfolio/p-chatbot.jpeg",
    title: "Full-Stack AI Chatbot (Next.js + OpenAI API)",
    desc: "This project was created to deepen my understanding of full-stack development using Next.js and modern web technologies. It explores key concepts such as API integration, authentication, and database interaction—highlighted by the use of the OpenAI API to power the chatbot’s conversational intelligence. The project focuses on clean architecture, real-time responsiveness, and a user-friendly interface. 🔐 Demo Login: hello@sunnysong.me / pw: hireSunny2025!",
    link: "https://ai-chatbot-nqy97xgif-sunny-songs-projects.vercel.app/",
  },      
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const ListItem = ({ item, className = "" }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className={`pItem w-screen h-screen  overflow-hidden flex flex-col lg:flex-row justify-center items-center gap-[30px] md:gap-[50px] 2xl:gap-[100px] ${className}`}
      key={item.id}
      ref={ref}
    >
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg w-[80%] lg:w-[40%] rounded-xl overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={item.img}
          alt={item.title}
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText w-[80%] lg:w-[40%] flex flex-col gap-6"
      >
        <motion.h1
          variants={textVariants}
          className="hidden md:block lg:text-4xl font-semibold"
        >
          {item.title}
        </motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a
          variants={textVariants}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-rose-200 text-black py-2 px-3 rounded-md font-medium cursor-pointer">
            View Project
          </button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const getGradientClass = (index, length) => {
  if (index === 0) return "bg-gradient-to-r from-transparent to-violet-950";
  if (index === length - 1) {
    return length % 2 === 0
      ? "bg-gradient-to-r from-violet-950 to-transparent"
      : "bg-gradient-to-r from-violet-900 to-transparent";
  }
  return index % 2 === 1
    ? "bg-gradient-to-r from-violet-950 to-violet-900"
    : "bg-gradient-to-r from-violet-900 to-violet-950";
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setContainerDistance(rect.left);
    }
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio relative h-[600vh]" ref={ref}>
      <motion.div
        className="pList sticky top-0 flex h-screen w-max"
        style={{ x: xTranslate }}
      >
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item, index) => (
          <ListItem
            item={item}
            key={item.id}
            className={getGradientClass(index, items.length)}
          />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress sticky w-[50px] h-[50px] md:w-[80px] md:h-[80px] bottom-[100px] left-[100%] lg:left-0 lg:bottom-[80%]">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
