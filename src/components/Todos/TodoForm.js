import { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHendler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button title="Submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
