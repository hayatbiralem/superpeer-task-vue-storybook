import BaseCard from "../components/BaseCard";

export default {
  title: "Components/BaseCard",
  component: BaseCard,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseCard },
  template: `
<BaseCard>
  <template v-slot:header>
    Header slot
  </template>

  <template v-slot:default>
    Default slot
  </template>

  <template v-slot:foot>
    Footer slot
  </template>
</BaseCard>
  `
});

const defaultArgs = {};

const getArgs = args => {
  return Object.assign({}, defaultArgs, args);
};

export const Default = Template.bind({});
Default.args = getArgs({});

// export const Centered = Template.bind({});
// Centered.args = getArgs({
//   extraClassNames: "u-text-align-center"
// });
