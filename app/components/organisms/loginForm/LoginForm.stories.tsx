import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { expect, userEvent, waitFor, within } from "@storybook/test";
import { fn } from "@storybook/test";

const meta: Meta<typeof LoginForm> = {
  title: "SabaiCode/Organisms/LoginForm",
  component: LoginForm,
  args: {
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};

export const RequireFields: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const usernameInput = canvas.getByPlaceholderText("Enter your username");
    await userEvent.type(usernameInput, "Theang Dyna", {
      delay: 100,
    });
    const passwordInput = canvas.getByPlaceholderText("Enter your password");
    await userEvent.type(passwordInput, "12345678", {
      delay: 100,
    });

    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};

export const WithInteractionGroup: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter email and password", async () => {
      const usernameInput = canvas.getByPlaceholderText("Enter your username");
      await userEvent.type(usernameInput, "Theang Dyna", {
        delay: 100,
      });
      const passwordInput = canvas.getByPlaceholderText("Enter your password");
      await userEvent.type(passwordInput, "12345678", {
        delay: 100,
      });
    });

    await step("Submit form", async () => {
      const submitButton = canvas.getByRole("button");
      await userEvent.click(submitButton);
    });
  },
};

export const WithInteractionAssert: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter email and password", async () => {
      const usernameInput = canvas.getByPlaceholderText("Enter your username");
      await userEvent.type(usernameInput, "Theang Dyna", {
        delay: 100,
      });
      const passwordInput = canvas.getByPlaceholderText("Enter your password");
      await userEvent.type(passwordInput, "12345678", {
        delay: 100,
      });
    });

    await step("Submit form", async () => {
      const submitButton = canvas.getByRole("button");
      await userEvent.click(submitButton);
    });

    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
  },
};
