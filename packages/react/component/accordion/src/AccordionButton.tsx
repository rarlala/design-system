import { clsx } from "clsx";
import { useButton } from "@rarla/react-hooks-button";
import { useAccordionContext } from "./AccordionContext";
import { forwardRef, Ref, useCallback } from "react";
import { accordionButtonStyle } from "./styles.css";
import { AccordionButtonProps } from "./types";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItem],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

const _AccordionButton = forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
