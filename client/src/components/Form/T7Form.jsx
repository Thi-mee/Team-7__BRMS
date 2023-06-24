import React from 'react'
import { Form } from "@adobe/react-spectrum";
import { isChildValidFormComponent } from "./formLibrary";
// import withFormControlHandling from "./HOCs/withFormControlHandling";
import withFormHandling from "./HOCs/withFormHandling";




/**
 * T7Form is a form component that handles form control components
 * it is a wrapper for the Form component from react-spectrum
 * and is itself wrapped by the withFormHandling HOC which handles
 * the form state and form submission.
 * 
 * It should also check it the children are valid form components
 * using the isChildValidFormComponent function from formLibrary
 */
const T7Form = ({children, values, errors, onChange, onSubmit, resetForm, ...rest}) => {
  return (
    <Form {...rest}>
      {React.Children.map(children, (child) => {
        if (!isChildValidFormComponent(child)) return child;

        const { name } = child.props;

        return React.cloneElement(child, {
          value: values[name],
          error: errors[name],
          onChange,
          ...child.props,
        });
      })}
    </Form>
  );
};

export default withFormHandling(T7Form);
