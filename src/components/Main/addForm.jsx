import { useState, useEffect, useRef } from "react";
import styles from './addForm.module.css'

function AddForm({ formSubmit, setFormVisible }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      formSubmit(title);
      setTitle("");
    }
    setFormVisible(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        name='title'
        type="text"
        value={title}
        placeholder="Enter task title..."
        onChange={handleChange}
        ref={inputRef}
      />
      <button className={styles.submitButton} type='submit'>
        Submit
      </button>
    </form>
  );
}

export default AddForm;
