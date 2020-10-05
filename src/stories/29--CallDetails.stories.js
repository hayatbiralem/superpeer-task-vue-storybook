import CallDetails from "../components/CallDetails";

import response from "../data/example-api-response";

export default {
  title: "Components/CallDetails",
  component: CallDetails,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CallDetails },
  template: '<CallDetails v-bind="$props" />'
});

const defaultArgs = response.callDetails;

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
