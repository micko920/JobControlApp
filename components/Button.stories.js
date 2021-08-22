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

export const ERROR = Template.bind({});
ERROR.args = {
  primary: true,
  label: 'ERROR',
  onclick: '',
  backgroundColor: '#DF0303'
};

export const OK = Template.bind({});
OK.args = {
  label: 'OK',
  backgroundColor: '#0bec03'
};

export const NewBtn = Template.bind({});
NewBtn.args = {
  label: 'New',
  backgroundColor: '#0397ec'
};

