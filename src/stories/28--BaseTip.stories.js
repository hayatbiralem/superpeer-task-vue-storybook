import {
  default as BaseTip,
  layouts,
  decorations
} from "../components/BaseTip";

import response from "../data/example-api-response.js";

export default {
  title: "Components/BaseTip",
  component: BaseTip,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseTip },
  template: '<BaseTip v-bind="$props" />'
});

const defaultArgs = {
  text: response.callDetails.timezone
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const Centered = Template.bind({});
Centered.args = getArgs({
  extraClassNames: "u-text-align-center"
});

export const RightAligned = Template.bind({});
RightAligned.args = getArgs({
  extraClassNames: "u-text-align-right"
});
