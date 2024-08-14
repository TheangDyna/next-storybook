import type { Preview } from "@storybook/react";
import "@/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],
  argTypes: {
    variant: {control: 'select'},
    color: {control: 'select'}
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
