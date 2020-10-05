import {
  default as MetaList,
  layouts,
  decorations
} from "../components/MetaList";

import response from "../data/example-api-response.js";

export default {
  title: "Components/MetaList",
  component: MetaList,
  argTypes: {
    layout: {
      control: {
        type: "select",
        options: layouts
      }
    },
    decoration: {
      control: {
        type: "select",
        options: decorations
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MetaList },
  template: '<MetaList v-bind="$props" />'
});

const defaultArgs = {
  decoration: decoration[0],
  layout: layouts[0],
  items: response.callDetails.metaItems
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const Inline = Template.bind({});
Inline.args = getArgs({
  layout: "inline"
});

export const Bordered = Template.bind({});
Bordered.args = getArgs({
  decoration: "bordered"
});

export const InlineBordered = Template.bind({});
InlineBordered.args = getArgs({
  layout: "inline",
  decoration: "bordered"
});

export const InlineBox = Template.bind({});
InlineBox.args = getArgs({
  layout: "inline",
  decoration: "bordered",
  extraClassNames: "u-display-inline-block"
});
