import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./registerForm";

const meta: Meta<typeof RegisterForm> = {
  title: "SabaiCode/Organisms/RegisterForm",
  component: RegisterForm,
};

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {};
