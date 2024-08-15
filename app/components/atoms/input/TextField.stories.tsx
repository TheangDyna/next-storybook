import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

const meta: Meta<typeof TextField> = {
  title: "SabaiCode/Atoms/TextField",
  component: TextField,
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Label",
    placeholder: "example...",
    name: "default",
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password Field",
    type: "password",
    value: "password",
    name: "password",
  },
};

export const NumberField: Story = {
  args: {
    label: "Number Field",
    type: "number",
    value: "123",
    name: "number",
  },
};

export const ErrorField: Story = {
  args: {
    label: "Error Field",
    type: "text",
    name: "error",
    error: "This field is required",
  },
};

export const WithInteraction: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const testValue = "Type some text...";

    const input = canvas.getByPlaceholderText("example...");

    await step("Change input", async () => {
      await userEvent.type(input, testValue, {
        delay: 100,
      });
    });

    await waitFor(() => {
      expect(args.onChange).toHaveBeenCalled();
      expect(input).toHaveValue(testValue);
    });
  },
};
