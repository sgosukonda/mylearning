import { useState, useCallback } from "react";

const useForm = (formObj) => {
  const [form, setForm] = useState(formObj);
  const onInputChange = useCallback((event) => {}, []);
  const renderFormInputs = () => {
    return Object.values(form).map((inputObj) => {
      const { renderInput, value, label, valid, errorMessage } = inputObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  };
  return { renderFormInputs };
};

export default useForm;
