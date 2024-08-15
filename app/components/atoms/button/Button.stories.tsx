import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

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
    disabled: true,
  },
};

export const WithInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Click button", async () => {
      const button = canvas.getByRole("button");
      await userEvent.click(button);
    });

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const DisableWithInteraction: Story = {
  args: {
    ...Disable.args,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Click button", async () => {
      const button = canvas.getByRole("button");
      await userEvent.click(button);
    });

    await waitFor(() => expect(args.onClick).not.toHaveBeenCalled());
  },
};
