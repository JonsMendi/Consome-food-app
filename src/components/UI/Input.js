import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}></label>
      <input
        id={props.id}
        type={props.type}
        onSubmit={props.onSubmit}
        onBlur={props.onBlur}
      />
    </div>
  );
};
export default Input;
