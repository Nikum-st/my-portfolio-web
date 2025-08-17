import { useRef } from "react";
import { FormDataLayout } from "./FormDataLayout";
import emailjs from "@emailjs/browser";

export const FormData = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
          console.error(error);
        }
      );
  };

  return <FormDataLayout sendMessage={sendMessage} formRef={formRef} />;
};
