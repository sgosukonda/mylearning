import Input from "../ui/Input";

const formConfig = (label, name, type, defaultValue = "") => {
  return {
    renderInput: (handleChange, value, isValid, errorMessage, key) => {
      return (
        <Input
          label={label}
          name={name}
          type={type}
          value={value}
          isValid={isValid}
          errorMessage={errorMessage}
          key={key}
          handleChange={handleChange}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
};

export default formConfig;

