import "../src/styles/main.scss";
// Above usage did not work but following did.
// https://github.com/storybookjs/storybook/issues/6364#issuecomment-485651328
// import "!style-loader!css-loader!sass-loader!../src/styles/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};
