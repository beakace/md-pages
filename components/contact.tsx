"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Tell me what you want to build. I’ll reply with next steps and a rough
        estimate. You can also email me at{" "}
        <a className="underline" href="mailto:michaldziuba26@gmail.com">
          michaldziuba26@gmail.com
        </a>{" "}
        .
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent successfully");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="senderName"
          type="text"
          maxLength={200}
          placeholder="Your name (optional)"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <select
          className="h-14 px-4 rounded-lg borderBlack transition-all my-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="projectType"
          defaultValue=""
        >
          <option value="" disabled>
            What do you need? (optional)
          </option>
          <option value="Landing page">Landing page</option>
          <option value="Business website">Business website</option>
          <option value="Web app UI / front-end">Web app UI / front-end</option>
          <option value="WordPress">WordPress</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="budget"
          type="text"
          maxLength={200}
          placeholder="Budget range (optional)"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all my-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="timeline"
          type="text"
          maxLength={200}
          placeholder="Timeline / deadline (optional)"
        />
        <textarea
          className="h-52 rounded-lg borderBlack p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:text-black/70 dark:outline-none"
          name="message"
          placeholder="Briefly describe what you need (goals, pages/features, links/examples, etc.)"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
