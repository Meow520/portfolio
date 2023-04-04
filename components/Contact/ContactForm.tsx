import React, { FC } from "react";
import InputBlock from "./InputBlock";
import FormButton from "./FormButton";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ContactFormData } from "@/types/types";
import { Router, useRouter } from "next/router";

const ContactForm: FC = () => {
  const methods = useForm<ContactFormData>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  // const onSubmit: SubmitHandler<ContactFormData> = (data) => console.log(data);
  const serviceId = process.env.EMAIL_SERVICE_ID;
  const templateId = process.env.EMAIL_TEMPLATE_ID;
  const router = useRouter();
  // const userId = process.env.EMAIL_USER_ID;

  const onSubmit: SubmitHandler<ContactFormData> = async(data) => {
    serviceId &&
      templateId &&
      // userId &&
      await emailjs
        .send(serviceId, templateId, {
          name: data.username,
          email: data.email,
          message: data.message,
        })
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Send your mail!");
          router.push('/')
        })
        .catch((error) => {
          console.log("FAILED...", error);
          alert("Failed!");
        });
  };

  return (
    <div className="w-2/3 mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputBlock
            name="username"
            label="Name"
            inputType="text"
            isRequired={true}
            maxLength={30}
          />
          <InputBlock
            name="email"
            label="E-mail"
            inputType="email"
            isRequired={true}
            maxLength={200}
          />
          <InputBlock
            name="message"
            label="Message"
            inputType="textarea"
            isRequired={true}
            rows={8}
          />
          <div>
            <FormButton label="Send" buttonType="submit" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
