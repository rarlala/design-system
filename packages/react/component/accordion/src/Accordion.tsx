import { Ref, forwardRef, useState } from "react";
import { clsx } from "clsx";
import { AccordionProps } from "./types";
import AccordionContext from "./AccordionContext";
import { accordionStyle } from "./styles.css";

const Accordion = (props: AccordionProps, ref: Ref<HTMLDivElement>) => {
  const { defaultActiveItems = [], children, className, ...rest } = props;

  const [activeItems, setActiveItem] = useState<string[]>(defaultActiveItems);

  const handleSetActiveItem = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItem(activeItems.filter((activeItem) => activeItem !== item));
    } else {
      setActiveItem([...activeItems, item]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItems, setActiveItem: handleSetActiveItem }}
    >
      <div ref={ref} className={clsx([accordionStyle, className])} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const _Accordion = forwardRef(Accordion);
export { _Accordion as Accordion };
