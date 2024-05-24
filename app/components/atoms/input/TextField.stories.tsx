import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "SabaiCode/Atoms/TextField",
  component: TextField,
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
