import MetaListItem from "../components/MetaListItem";

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
  icon: "fill-calendar",
  text: "7 Oct, Weds"
};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

export const OnlyMeta = Template.bind({});
OnlyMeta.args = getArgs({
  icon: "",
  text: "7 Oct, Weds"
});

export const OnlyIcon = Template.bind({});
OnlyIcon.args = getArgs({
  icon: "fill-calendar",
  text: ""
});
