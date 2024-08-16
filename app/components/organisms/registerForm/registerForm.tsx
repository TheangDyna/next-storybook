"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "../../atoms/input/TextField";
import Button from "../../atoms/button/Button";
import { fakeEndpoint } from "@/app/constants";

interface Inputs {
  email: string;
  password: string;
  cpassword: string;
}

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const password = watch("password");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch(fakeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      console.log(res);

      if (res.status === 401) {
        throw new Error("Failed to register. Please try again.");
      }

      const result = await res.json();
      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className="w-80 mx-auto p-4 border rounded bg-white"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-xl">Register Form</h1>

      <TextField
        type="email"
        label="Email"
        placeholder="Enter your email"
        name="email"
        register={register("email", {
          required: "Email is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email is no valid.",
          },
        })}
        error={errors.email?.message}
      />

      <TextField
        type="password"
        label="Password"
        placeholder="Enter your password"
        register={register("password", {
          required: "Password is required.",
          minLength: {
            value: 6,
            message: "Password should be at-least 6 characters.",
          },
          maxLength: {
            value: 12,
            message: "Password should too long.",
          },
        })}
        error={errors.password?.message}
      />

      <TextField
        type="password"
        label="Confirm Password"
        placeholder="Enter your Confirm Password"
        register={register("cpassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Confirm Password is not match",
        })}
        error={errors.cpassword?.message}
      />

      <Button className="w-full" type="submit">
        Register
      </Button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
};

export default RegisterForm;
