import React from "react";
import { vars } from "@rarla/themes";
import { Text } from "@rarla/react-components-layout";
import { Button as _Button } from "@rarla/react-components-button";
import { useButton, useToggleButton } from "@rarla/react-hooks-button";
import "@rarla/react-components-button/style.css";
import "@rarla/react-components-layout/style.css";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

const TextButtonComponent = () => {
  const { buttonProps } = useButton({
    elementType: "div",
    onClick: () => {
      console.log("ttt");
    },
  });

  return (
    <Text
      {...buttonProps}
      as="div"
      fontSize="md"
      color="green"
      style={{
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      텍스트 버튼입니다.
    </Text>
  );
};

export const TextButtonStory = {
  render: () => <TextButtonComponent />,
};

const ToggleButtonComponent = () => {
  const { buttonProps, isSelected } = useToggleButton(
    { elementType: "button" },
    false,
  );

  return (
    <_Button
      {...buttonProps}
      variant={isSelected ? "solid" : "outline"}
      color="green"
    >
      {isSelected ? "😀" : "😂"}
    </_Button>
  );
};

export const ToggleButtonStory = {
  render: () => <ToggleButtonComponent />,
};
