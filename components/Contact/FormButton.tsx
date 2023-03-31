import React, { FC } from "react";

type Props = {
  label: string;
  onSubmit?: (event: React.MouseEvent<HTMLElement>) => void;
  buttonType: "button" | "submit" | "reset" | undefined;
};

const FormButton: FC<Props> = (props) => {
  const { label, onSubmit, buttonType } = props;
  return (
    <div className="flex justify-center py-5">
      <button
        onClick={onSubmit}
        type={buttonType}
        className="text-2xl bg-gray-800 hover:bg-gray-400 px-6 py-3 rounded-md text-white"
      >
        {label}
      </button>
    </div>
  );
};

export default FormButton;
