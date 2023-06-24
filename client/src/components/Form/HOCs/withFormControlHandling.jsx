import React, {useState} from 'react'


/**
 * This function should take each individual form control component
 * and pass down the props from the formProps object to the component
 * and return the component with the props passed down.
 * It should also contain logic like the following:
 * it should have a state to check if an input is touched or not
 * 
 * @returns 
 */
const withFormControlHandling = (WrappedComponent) => {
   return (props) => {
    const [touched, setTouched] = useState(false);

    const handleBlur = () => {
      setTouched(true);
    };

    return (
      <WrappedComponent
        {...props}
        onBlur={handleBlur}
        touched={touched}
      />
    );
  };
}

export default withFormControlHandling