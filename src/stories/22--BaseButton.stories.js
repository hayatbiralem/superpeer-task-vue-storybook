import BaseButton from "../components/BaseButton";

import icons from "../data/icons";

export default {
  title: "Components/BaseButton",
  component: BaseButton,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
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
  components: { BaseButton },
  template: '<BaseButton @onClick="onClick" v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  label: "Button"
};

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  label: "Button"
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Button",
  isGhost: true
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  label: "Button",
  isGhost: true,
  isPrimary: true
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Active = Template.bind({});
Active.args = {
  label: "Button",
  isActive: true
};

export const ButtonWithBaseIcon = Template.bind({});
ButtonWithBaseIcon.args = {
  label: "Button",
  icon: "fill-camera"
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: "",
  isIcon: true,
  isRound: true,
  icon: "fill-camera"
};

export const IconButtonActive = Template.bind({});
IconButtonActive.args = {
  label: "",
  isIcon: true,
  isActive: true,
  isRound: true,
  icon: "fill-camera"
};
