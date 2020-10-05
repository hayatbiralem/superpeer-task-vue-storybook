import BaseHeading from "../components/BaseHeading";

import response from "../data/example-api-response";

export default {
  title: "Components/BaseHeading",
  component: BaseHeading,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseHeading },
  template: '<BaseHeading v-bind="$props" />'
});

const defaultArgs = {
  prefix: response.callDetails.headingPrefix,
  text: response.callDetails.headingText
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const OnlyPrefix = Template.bind({});
OnlyPrefix.args = getArgs({
  text: ""
});

export const OnlyText = Template.bind({});
OnlyText.args = getArgs({
  prefix: ""
});

export const Centered = Template.bind({});
Centered.args = getArgs({
  extraClassNames: "u-text-align-center"
});

export const RightAligned = Template.bind({});
RightAligned.args = getArgs({
  extraClassNames: "u-text-align-right"
});
