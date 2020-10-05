import BaseIcon from "../components/BaseIcon";

import icons from "../data/icons";

export default {
  title: "Components/BaseIcon",
  component: BaseIcon,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
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
  components: { BaseIcon },
  template: '<BaseIcon v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  icon: "fill-camera"
};

export const Colored = Template.bind({});
Colored.args = {
  icon: "fill-camera",
  color: "rgba(255,0,0,1)"
};

export const PrimaryColored = Template.bind({});
PrimaryColored.args = {
  icon: "fill-camera",
  extraClassNames: "u-text-color-primary"
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  icon: "fill-camera",
  size: "4em"
};

const TemplateAvailableIcons = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseIcon },
  template: `<div class="c-story-available-icons">
              <BaseIcon v-bind="$props" v-for="(icon, index) in icons" :key="index" :icon="icon" :class="classes(icon)" />
            </div>`,
  data: function() {
    return {
      icons: icons
    };
  },
  methods: {
    classes: function(icon) {
      return this.icon === icon ? "is-active" : "";
    }
  }
});

export const AvailableIcons = TemplateAvailableIcons.bind({});
AvailableIcons.args = {
  size: "4em"
};
