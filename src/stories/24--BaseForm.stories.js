import { default as BaseForm, layouts } from "../components/BaseForm";

import response from "../data/example-api-response";

export default {
  title: "Components/BaseForm",
  component: BaseForm,
  argTypes: {
    layout: {
      control: {
        type: "select",
        options: layouts
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseForm },
  template: '<BaseForm v-bind="$props" />'
});

const defaultArgs = {
  layout: "default",
  fields: response.form.fields
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const Horizontal = Template.bind({});
Horizontal.args = getArgs({
  layout: "horizontal"
});
