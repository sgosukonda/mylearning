import React from "react";
import useForm from "../../hooks/use-form";
import formConfig from "../../utilities/formConfig";
import styles from "./SignupForm.module.css";

const signupFormConfig = {
  name: {
    ...formConfig("Full Name", "name", "text"),
  },
  email: {
    ...formConfig("Email", "email", "email"),
  },
  password: {
    ...formConfig("Password", "password", "password", "password"),
  },
  confirmPassword: {
    ...formConfig(
      "Confirm Password",
      "confirmPassword",
      "password",
      "password"
    ),
  },
};

const SignupForm = () => {
  const { renderFormInputs } = useForm(signupFormConfig);

  return (
    <form className={styles["signupForm"]}>
      <h1>Sign Up Form</h1>
      {renderFormInputs()}
      <button type="Submit">Submit</button>
    </form>
  );
};

export default SignupForm;