import MetaListItem from "../components/MetaListItem";

import response from "../data/example-api-response.js";
import icons from "../data/icons";

export default {
  title: "Components/MetaListItem",
  component: MetaListItem,
  argTypes: {
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
  components: { MetaListItem },
  template: '<MetaListItem v-bind="$props" />'
});

const defaultArgs = {
  icon: response.callDetails.metaItems[0].icon,
  text: response.callDetails.metaItems[0].text
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const OnlyMeta = Template.bind({});
OnlyMeta.args = getArgs({
  icon: "",
  text: response.callDetails.meta[0].text
});

export const OnlyIcon = Template.bind({});
OnlyIcon.args = getArgs({
  icon: response.callDetails.meta[0].icon,
  text: ""
});
