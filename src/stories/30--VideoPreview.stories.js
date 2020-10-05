import VideoPreview from "../components/VideoPreview";

import response from "../data/example-api-response.js";

export default {
  title: "Components/VideoPreview",
  component: VideoPreview,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VideoPreview },
  template: '<VideoPreview v-bind="$props" />'
});

const defaultArgs = {
  image: response.videoPreview.image,
  inputValue: response.videoPreview.inputValue
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
