import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
type Props = {
  name: string;
  label: string;
  inputType: string;
  maxLength?: number;
  isRequired?: boolean;
  cols?: number;
  rows?: number;
};
const InputBlock: FC<Props> = (props) => {
  const { name, label, inputType, maxLength, isRequired, cols, rows } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="my-5">
      <label htmlFor={name} className="ml-2 text-xl font-semibold">
        {label}
        {!isRequired && <span className="text-gray-400 ml-1">(optional)</span>}
      </label>
      <div className="text-red-600 ml-2">
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div>{message}</div>
          )}
        />
      </div>
      {inputType == "textarea" ? (
        <div className="flex items-center">
          <textarea
            id={name}
            cols={cols}
            rows={rows}
            className={`${
              errors[name] ? "bg-red-100" : "focus:bg-blue-50"
            } ${"w-full rounded-md text-2xl py-1 px-3 my-2 border-gray-400 border"}`}
            {...register(name, { required: isRequired && "This is required." })}
          ></textarea>
        </div>
      ) : (
        <div>
          <input
            type={inputType}
            id={name}
            {...register(name, {
              required: isRequired && "This is required.",
              maxLength: {
                value: maxLength ? maxLength : 0,
                message: "This input exceed max length.",
              },
            })}
            className={`${
              errors[name] ? "bg-red-100" : "focus:bg-blue-50"
            } ${"w-full rounded-md text-2xl py-1 px-3 my-2 border-gray-400 border"}`}
          />
        </div>
      )}
    </div>
  );
};

export default InputBlock;
