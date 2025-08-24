import { useRef, useState } from "react";
import { FormDataLayout } from "./FormDataLayout";
import emailjs from "@emailjs/browser";
import { Loader } from "../../../Loader/Loader";

export const FormData = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log(serviceId, templateId, publicKey);

    if (!serviceId || !templateId || !publicKey) {
      alert(
        "Email configuration is missing. Please check environment variables."
      );
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        alert("Message sent successfully!");
        formRef.current?.reset();
        setIsLoading(false);
      },
      (error) => {
        alert("Failed to send the message, please try again.");
        console.error(error);
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      {isLoading && (
        <Loader size="large" color="text-white" isForm fullScreen />
      )}
      <FormDataLayout sendMessage={sendMessage} formRef={formRef} />
    </>
  );
};
