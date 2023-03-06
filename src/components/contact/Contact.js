import React, {useEffect, useRef, useState} from "react";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { motion } from 'framer-motion';

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const myself1 = "CONTACT ME".split("");

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vyrkgbj",
        "template_2scxsp8",
        form.current,
        "7MdqhrS1LShsqAiHQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-Font mb-14">
          <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myself1}
              idx={20}
            />
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <motion.div
            className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.3, duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: 100},
              visible: {opacity: 1, x: 0},
            }}
          >
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 font-Font py-2 lgl:py-5"
              onSubmit={handleSend}
              ref={form}
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input name="name" className={` contactInput`} type="text" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    name="number"
                    className={` contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input name="email" className={` contactInput`} type="email" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input name="subject" className={` contactInput`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  className={` contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  value="Send"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
