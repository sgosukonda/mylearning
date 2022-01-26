import formConfig from "../../utilities/formConfig";

const signupForm = {
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
