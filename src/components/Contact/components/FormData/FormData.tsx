import { useRef } from "react";
import { FormDataLayout } from "./FormDataLayout";
import emailjs from "@emailjs/browser";

export const FormData = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
  };

  return <FormDataLayout sendMessage={sendMessage} />;
};
