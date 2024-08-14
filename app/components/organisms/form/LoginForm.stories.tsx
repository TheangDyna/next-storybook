import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { userEvent, within } from "@storybook/test";
import { fn } from "@storybook/test";

const meta: Meta<typeof LoginForm> = {
  title: "SabaiCode/Organisms/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const usernameInput = canvas.getByPlaceholderText("Enter your username");
    await userEvent.type(usernameInput, "Theang Dyna");
    const passwordInput = canvas.getByPlaceholderText("Enter your password");
    await userEvent.type(passwordInput, "Theang Dyna");

    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
};
