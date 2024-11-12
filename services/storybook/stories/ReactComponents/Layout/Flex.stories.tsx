import "@rarla/react-components-layout/style.css";
import { Flex as _Flex, Flex } from "@rarla/react-components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BlockStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    FlexShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: { width: "300px" },
  },
  render: (arg) => (
    <Flex {...arg}>
      <div>테스트</div>
      <div>입니다</div>
    </Flex>
  ),
};
