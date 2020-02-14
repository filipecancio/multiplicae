import { useState, useEffect } from 'react';

function useValidation(validation, callback, ...values) {
  const [value, setValue] = useState(
    Object.assign(...values.map(value => ({ [value]: '' })))
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange({ target }) {
    const { name, value, type, checked } = target;

    setValue(oldValue => {
      const newValue =
        type === 'checkbox' ? { [name]: checked } : { [name]: value };
      console.log(Object.assign({ ...oldValue }, newValue));
      return Object.assign({ ...oldValue }, newValue);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('ae');

    setErrors(validation(value));
    setIsSubmitting(true);
  }

  function sendFormIsValid() {
    if (
      Object.values(errors).filter(error => error).length === 0 &&
      isSubmitting
    ) {
      callback();
    }
  }

  useEffect(sendFormIsValid, [errors]);

  return { value, handleChange, handleSubmit, errors };
}

export default useValidation;