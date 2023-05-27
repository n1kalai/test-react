import React from "react";

const InputField = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
