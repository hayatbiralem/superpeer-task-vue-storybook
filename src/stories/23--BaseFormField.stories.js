import BaseFormField from "../components/BaseFormField";

import icons from "../data/icons";
import fields from "../data/fields";
import states from "../data/states";

export default {
  title: "Components/BaseFormField",
  component: BaseFormField,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: fields
      }
    },
    state: {
      control: {
        type: "select",
        options: states
      }
    },
    icon: {
      control: {
        type: "select",
        options: icons
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseFormField },
  template: '<BaseFormField v-bind="$props" />'
});

const defaultArgs = {
  type: "text",
  placeholder: "Placeholder...",
  state: "idle",
  options: [
    {
      text: "Choose...",
      value: ""
    },
    {
      text: "Lorem ipsum",
      value: "1"
    },
    {
      text: "Dolor sit amet",
      value: "2"
    }
  ],
  buttonText: "Button",
  buttonClick: function() {
    alert("Click!");
  }
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({
  type: "text"
});

export const Text = Template.bind({});
Text.args = getArgs({
  type: "text"
});

export const TextWithIcon = Template.bind({});
TextWithIcon.args = getArgs({
  type: "text",
  icon: "line-user"
});

export const TextStateDisabled = Template.bind({});
TextStateDisabled.args = getArgs({
  type: "text",
  disabled: true
});

export const TextStateError = Template.bind({});
TextStateError.args = getArgs({
  type: "text",
  state: "error"
});

export const TextStateSuccess = Template.bind({});
TextStateSuccess.args = getArgs({
  type: "text",
  state: "success"
});

export const Select = Template.bind({});
Select.args = getArgs({
  type: "select"
});

export const SelectStateDisabled = Template.bind({});
SelectStateDisabled.args = getArgs({
  type: "select",
  disabled: true
});

export const SelectStateError = Template.bind({});
SelectStateError.args = getArgs({
  type: "select",
  state: "error"
});

export const SelectStateSuccess = Template.bind({});
SelectStateSuccess.args = getArgs({
  type: "text",
  state: "success"
});

export const Button = Template.bind({});
Button.args = getArgs({
  type: "button"
});

export const ButtonStateDisabled = Template.bind({});
ButtonStateDisabled.args = getArgs({
  type: "button",
  disabled: true
});
