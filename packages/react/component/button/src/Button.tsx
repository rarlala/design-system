import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@rarla/themes";
import { clsx } from "clsx";

import { ButtonProps } from "./types";
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  activeColorVariant,
  spinnerStyle,
  spanStyle,
} from "./style.css";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled = false,
    children,
    onKeyDown,
    style,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.key === "Enter" || event.key === "13") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <button
      {...props}
      ref={ref}
      onKeyDown={handleKeyDown}
      onClick={() => {
        console.log("ttt");
      }}
      role="button"
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      disabled={disabled}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
      data-loading={isLoading}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
