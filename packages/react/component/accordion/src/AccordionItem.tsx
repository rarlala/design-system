import { Children, Ref, cloneElement, forwardRef, isValidElement } from "react";
import { clsx } from "clsx";
import { AccordionItemProps } from "./types";
import { accordionItemStyle } from "./styles.css";

const AccordionItem = (props: AccordionItemProps, ref: Ref<HTMLDivElement>) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }
    return null;
  });

  return (
    <div ref={ref} className={clsx([accordionItemStyle, className])} {...rest}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
