import { Compare } from ".";

export default {
  title: "Components/Compare",
  component: Compare,
  argTypes: {
    property1: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "off",
    className: {},
    checkCircle: "/img/check-circle-1.png",
    addCircle: "/img/add-circle.png",
  },
};
