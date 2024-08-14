import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "SabaiCode/Atoms/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button Default",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Outline",
    variant: "outline",
  },
};

export const Text: Story = {
  args: {
    children: "Button Text",
    variant: "text",
  },
};

export const Disable: Story = {
  args: {
    children: "Button Disable",
    disabled: true
  }
};
