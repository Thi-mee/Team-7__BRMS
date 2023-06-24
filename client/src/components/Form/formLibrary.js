import { TextField, Checkbox, TextArea, RadioGroup, Radio, NumberField } from "@adobe/react-spectrum";
import withFormControlHandling from './HOCs/withFormControlHandling';


const VALID_FORM_COMPONENTS = [
  TextField,
  Checkbox,
  TextArea,
  RadioGroup,
  Radio,
  NumberField  
];

export const isChildValidFormComponent = (child) => {
  return (
    VALID_FORM_COMPONENTS.includes(child.type)
  );
};

export const handleMissingName = (child) => {
  if (!child.props.name) {
    console.error(
      `Form child component of type ${child.type?.name || child.type?.name?.name} is missing a name prop. This is required for form submission.`
    );
  }
}

export const T7TextField = withFormControlHandling(TextField);
export const T7Checkbox = withFormControlHandling(Checkbox);
export const T7TextArea = withFormControlHandling(TextArea);
export const T7RadioGroup = withFormControlHandling(RadioGroup);
export const T7Radio = withFormControlHandling(Radio);
export const T7NumberField = withFormControlHandling(NumberField);

