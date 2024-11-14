import * as React from "react";

export type AccordionProps = {
  defaultActiveItems?: string[];
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "children">;

export type AccordionItemProps = {
  children: React.ReactNode[];
  itemName: string;
} & Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "children">;

export type AccordionButtonProps = {
  itemName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionPanelProps = {
  itemName?: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
