import TheWaitingRoom from "../components/TheWaitingRoom";

import response from "../data/example-api-response.js";

export default {
  title: "Components/TheWaitingRoom",
  component: TheWaitingRoom,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheWaitingRoom },
  template: `
<TheWaitingRoom v-bind="$props" />
  `
});

const defaultArgs = {
  onSubmit: response.form.submit,
  callDetails: response.callDetails,
  videoPreview: response.videoPreview,
  fields: response.form.fields,
  submitText: response.submitText
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

// export const Centered = Template.bind({});
// Centered.args = getArgs({
//   extraClassNames: "u-text-align-center"
// });
