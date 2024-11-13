import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<"button">;
  (props: BaseButtonProps<"a">): UseButtonReturn<"a">;
  (props: BaseButtonProps<"div">): UseButtonReturn<"div">;
  (props: BaseButtonProps<"span">): UseButtonReturn<"span">;
  (props: BaseButtonProps<"input">): UseButtonReturn<"input">;
};

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
  (
    props: BaseButtonProps<"button">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<"button">;
  (
    props: BaseButtonProps<"a">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<"a">;
  (
    props: BaseButtonProps<"div">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<"div">;
  (
    props: BaseButtonProps<"span">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<"span">;
  (
    props: BaseButtonProps<"input">,
    isSelected?: boolean,
  ): UseToggleButtonReturn<"input">;
};
