import MyButton from './Button.vue';

export default {
  title: 'States/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Error = Template.bind({});
Error.args = {
  primary: true,
  label: 'ERROR',
};

export const OK = Template.bind({});
OK.args = {
  label: 'OK',
};

