import { Ref, forwardRef, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { AccordionPanelProps } from "./types";
import { useAccordionContext } from "./AccordionContext";
import { accordionPanelStyle, panelHeight } from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const AccordionPanel = (
  props: AccordionPanelProps,
  ref: Ref<HTMLDivElement>,
) => {
  const { itemName = "", children, className, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);

  const [currentPanelHeight, setCurrentPanelHeight] = useState<string>();
  useEffect(() => {
    if (!innerRef.current) return;

    setCurrentPanelHeight(
      isActive ? `${innerRef.current.clientHeight}px` : "0",
    );
  }, [isActive, activeItems]);

  return (
    <div
      ref={ref}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        ...assignInlineVars({
          [panelHeight]:
            currentPanelHeight ?? `${innerRef.current?.clientHeight}px`,
        }),
        ...style,
      }}
      {...rest}
    >
      <div ref={innerRef} data-name="panel-inner">
        {children}
      </div>
    </div>
  );
};

const _AccordionPanel = forwardRef(AccordionPanel);
export { _AccordionPanel as AccordionPanel };
