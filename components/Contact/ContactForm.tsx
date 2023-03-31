import React, { FC } from "react";
import InputBlock from "./InputBlock";
import FormButton from "./FormButton";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface ContactFormData {
  username: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const methods = useForm<ContactFormData>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<ContactFormData> = (data) => console.log(data);
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
          <InputBlock name="email" label="E-mail" inputType="email" isRequired={true} />
          <InputBlock
            name="message"
            label="Message"
            inputType="textarea"
            isRequired={true}
            rows={8}
          />
          <FormButton label="Send" buttonType="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
