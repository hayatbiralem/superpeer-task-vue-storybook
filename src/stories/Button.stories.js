import UIButton from "../components/Button";

export default {
  title: "Components/Button",
  component: UIButton,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    icon: {
      control: {
        type: "select",
        options: require("../data/icons.json")
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UIButton },
  template: '<UIButton @onClick="onClick" v-bind="$props" />'
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
