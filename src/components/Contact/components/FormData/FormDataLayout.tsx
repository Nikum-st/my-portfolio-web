import { motion } from "framer-motion";
import { formVariants } from "../../utils/contsctVariants";
import React from "react";

type FormDataLayoutT = {
  sendMessage: (e: React.FormEvent<Element>) => void;
  formRef: React.RefObject<HTMLFormElement>;
};

export const FormDataLayout = ({ sendMessage, formRef }: FormDataLayoutT) => {
  return (
    <motion.div variants={formVariants}>
      <form ref={formRef} onSubmit={sendMessage} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-textSecondary text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border text-black rounded w-full py-2 px-3 text-text focus:outline-none focus:shadow-outline "
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-textSecondary text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border text-black rounded w-full py-2 px-3 text-text focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-textSecondary text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="shadow appearance-none border rounded text-black w-full py-2 px-3 text-text focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 rounded-full hover:opacity-50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};
