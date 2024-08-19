import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./registerForm";
import { http, HttpResponse, delay } from "msw";
import { fakeEndpoint } from "@/app/constants";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof RegisterForm> = {
  title: "SabaiCode/Organisms/RegisterForm",
  component: RegisterForm,
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};

export const LoginSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(fakeEndpoint, async () => {
          await delay(800);
          return HttpResponse.json({});
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("Enter your email");
    await userEvent.type(emailInput, "theangdyna365@gmail.com");

    const passwordInput = canvas.getByPlaceholderText("Enter your password");
    await userEvent.type(passwordInput, "12345678");

    const cpasswordInput = canvas.getByPlaceholderText(
      "Enter your confirm password"
    );
    await userEvent.type(cpasswordInput, "12345678");

    const registerButton = canvas.getByRole("button");
    await userEvent.click(registerButton);

    canvas.findByText(/Registration successful!/);
  },
};

export const LoginWithExistingUser: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(fakeEndpoint, async () => {
          await delay(800);
          return new HttpResponse(null, { status: 409 });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByPlaceholderText("Enter your email");
    await userEvent.type(emailInput, "theangdyna365@gmail.com");

    const passwordInput = canvas.getByPlaceholderText("Enter your password");
    await userEvent.type(passwordInput, "12345678");

    const cpasswordInput = canvas.getByPlaceholderText(
      "Enter your confirm password"
    );
    await userEvent.type(cpasswordInput, "12345678");

    const registerButton = canvas.getByRole("button");
    await userEvent.click(registerButton);

    canvas.findByText(/User already exists. Please try logging in./);
  },
};
