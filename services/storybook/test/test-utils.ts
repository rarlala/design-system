import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

import "@testing-library/jest-dom";

import * as globalStorybookConfig from "../.storybook/preview";

import { setProjectAnnotations } from "@storybook/react";

setProjectAnnotations(globalStorybookConfig);

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
