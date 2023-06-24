import React, { useState, useRef } from "react";
import { handleMissingName } from "../formLibrary";

function withFormHandling(WrappedComponent) {
  return function (props) {
    const formInitialDataRef = useRef(null);
    const [values, setValues] = useState(() => {
      if (props.initialValues) {
        formInitialDataRef.current = props.initialValues;
        return props.initialValues;
      }
      if (Array.isArray(props.children)) {
        const initialValues = {};
        for (const child of props.children) {
          handleMissingName(child);
          const { name, value } = child.props;
          if (name) {
            initialValues[name] = value || "";
          }
        }
        formInitialDataRef.current = initialValues;
        return initialValues;
      } else {
          handleMissingName(props.children);
          const { name, value } = props.children.props;
        if (name) {
          formInitialDataRef.current = { [name]: value || "" };
          return { [name]: value || "" };
        }
        formInitialDataRef.current = {};
        return {};
      }
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      // validate form data
      const errors = validate(values);

      if (Object.keys(errors).length === 0) {
        if (!props.onSubmit) {
          console.warn(
            "Form has no onSubmit handler. Form data will be logged to console."
          );

          console.log(values);
        }
        // submit form data
        props.onSubmit(values);
      } else {
        setErrors(errors);
      }
    };

    const validate = (values) => {
      // implement validation logic
      const errors = {};

      // ...

      return errors;
    };

    const resetForm = () => {
      setValues(formInitialDataRef.current);
      setErrors({});
    };
        

    return (
      <WrappedComponent
        {...props}
        values={values}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
        resetForm={resetForm}
      />
    );
  };
}

export default withFormHandling;
