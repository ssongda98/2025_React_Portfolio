import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import "./contact.css";
import ContactSvg from './ContactSvg';

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();

  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSucess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSucess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div
      className="contact h-full flex gap-[100px] md:flex-row flex-col"
      ref={ref}
      onSubmit={sendEmail}
    >
      <div className="w-full md:w-1/2 h-full p-4 flex items-center justify-center">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="w-full xl:w-[80%] flex flex-col gap-6"
        >
          <motion.h1
            variants={listVariant}
            className="cTitle text-2xl font-semibold"
          >
            Lets keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your Name" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Your Email" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={8}
              name="user_message"
              placeholder="Write you message..."
            />
          </motion.div>

          <motion.button
            variants={listVariant}
            className="bg-rose-400 text-white px-6 py-4 rounded-lg cursor-pointer"
          >
            Send
          </motion.button>
          {success && (
            <span className="text-green-500">Message sent successfully!</span>
          )}
          {error && (
            <span className="text-red-500">
              Something went wrong, please try again.
            </span>
          )}
        </motion.form>
      </div>
      <div className="hidden w-1/2 h-full p-4 md:flex items-center justify-center">
        <ContactSvg/>
      </div>
    </div>
  );
};

export default Contact;
