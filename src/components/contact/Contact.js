import React, { useEffect, useRef, useState } from "react";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const myself1 = "CONTACT ME".split("");
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_vyrkgbj",
        "template_2scxsp8",
        form.current,
        "7MdqhrS1LShsqAiHQ"
      )
      .then(
        (result) => {
          toast.success("Thanks For Your Submission!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("There Was An Error! Please Try Again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    form.current.reset();
  };

  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-gray-300 dark:border-b-gray-600 overflow-hidden"
    >
      <div className="flex justify-center items-center text-center">
        <div className="flex flex-col gap-4 font-Font mb-14">
          <h1 className="text-4xl md:text-5xl text-darkText dark:text-lightText font-bold capitalize">
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
            className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#fff] to-[#fafafa] dark:from-[#1e2024] dark:to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowTwo dark:shadow-shadowOne"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 font-Font py-2 lgl:py-5"
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-darkText dark:text-lightText uppercase tracking-wide">
                    {t("YourName")}
                  </p>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true, maxLength: 20 })}
                    className={` contactInput ${
                      errors.name ? "focus-visible:outline-red-900" : ""
                    } `}
                  />

                  {errors.name && (
                    <span className="font-Font text-red-500">
                      {t("ThisFieldIsRequired")}
                    </span>
                  )}

                  {errors.name && errors.name.type === "maxLength" && (
                    <span className="font-Font text-red-500">
                      {t("Maxlengthexceeded")}
                    </span>
                  )}
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-darkText dark:text-lightText uppercase tracking-wide">
                    {t("PhoneNumber")}
                  </p>
                  <input
                    name="number"
                    type="text"
                    {...register("number", {
                      required: true,
                      pattern: /[+ 0-9]/,
                      maxLength: 20,
                    })}
                    className={` contactInput ${
                      errors.number ? "focus-visible:outline-red-600" : ""
                    } `}
                  />
                  {errors.number && (
                    <span className="font-Font text-red-500">
                      {t("ThisFieldIsRequired")}
                    </span>
                  )}

                  {errors.number && errors.number.type === "maxLength" && (
                    <span className="font-Font text-red-500">
                      {t("Maxlengthexceeded")}
                    </span>
                  )}
                  {errors.number && errors.number.type === "pattern" && (
                    <span className="font-Font text-red-500">
                      {t("ThisIsNotaNumber")}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-darkText dark:text-lightText uppercase tracking-wide">
                  {t("Email")}
                </p>
                <input
                  name="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className={` contactInput ${
                    errors.email ? "focus-visible:outline-red-600" : ""
                  } `}
                />

                {errors.email && (
                  <span className="font-Font text-red-500">
                    {t("ThisFieldIsRequired")}
                  </span>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <span className="font-Font text-red-600">
                    {t("ThisFieldIsRequired")}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-darkText dark:text-lightText uppercase tracking-wide">
                  {t("Subject")}
                </p>
                <input
                  name="subject"
                  type="text"
                  {...register("subject", { required: true, maxLength: 50 })}
                  className={` contactInput ${
                    errors.subject ? "focus-visible:outline-red-600" : ""
                  } `}
                />

                {errors.subject && (
                  <span className="font-Font text-red-500">
                    {t("ThisFieldIsRequired")}
                  </span>
                )}

                {errors.subject && errors.subject.type === "maxLength" && (
                  <span className="font-Font text-red-500">
                    {t("Maxlengthexceeded")}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-darkText dark:text-lightText uppercase tracking-wide">
                  {t("Message")}
                </p>
                <textarea
                  name="message"
                  cols="30"
                  rows="8"
                  {...register("message", { required: true, maxLength: 500 })}
                  className={` contactInput ${
                    errors.message ? "focus-visible:outline-red-600" : ""
                  } `}
                ></textarea>

                {errors.message && (
                  <span className="font-Font text-red-500">
                    {t("ThisFieldIsRequired")}
                  </span>
                )}

                {errors.message && errors.message.type === "maxLength" && (
                  <span className="font-Font text-red-500">
                    {t("Maxlengthexceeded")}
                  </span>
                )}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  value="Send"
                  className="w-full h-12 bg-[#e7e7e7] dark:bg-[#141518] rounded-lg text-base text-darkText dark:text-lightText tracking-wider uppercase dark:hover:text-white duration-300 hover:border-[2px] hover:border-designColor border-transparent"
                >
                  {t("SendMessage")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
