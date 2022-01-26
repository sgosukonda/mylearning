import styles from "./Input.module.css";

const Input = (props) => {
  const { label, type, name, value, handleChange, isValid, errorMessage } =
    props;

  return (
    <div className={styles["inputContainer"]}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} value={value} onChange={handleChange} />
      {!isValid && errorMessage && (
        <p className={styles["error"]}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
