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

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const password = watch("password");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

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

      if (!res.ok) {
        if (res.status === 409) {
          throw new Error("User already exists. Please try logging in.");
        } else if (res.status >= 400 && res.status < 500) {
          throw new Error("Failed to register. Please check your input.");
        } else {
          throw new Error("Server error. Please try again later.");
        }
      }

      setSuccess("Registration successful!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-80 mx-auto p-4 border rounded bg-white"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-xl mb-4">Register Form</h1>

      <TextField
        type="email"
        id="email"
        label="Email"
        placeholder="Enter your email"
        register={register("email", {
          required: "Email is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email is not valid.",
          },
        })}
        error={errors.email?.message}
      />

      <TextField
        type="password"
        id="password"
        label="Password"
        placeholder="Enter your password"
        register={register("password", {
          required: "Password is required.",
          minLength: {
            value: 6,
            message: "Password should be at least 6 characters long.",
          },
          maxLength: {
            value: 12,
            message: "Password should not exceed 12 characters.",
          },
        })}
        error={errors.password?.message}
      />

      <TextField
        type="password"
        id="cpassword"
        label="Confirm Password"
        placeholder="Enter your confirm password"
        register={register("cpassword", {
          required: "Confirm password is required.",
          validate: (value) => value === password || "Passwords do not match.",
        })}
        error={errors.cpassword?.message}
      />

      <Button className="w-full mt-4" type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </Button>

      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      {success && <p className="text-sm text-green-500 mt-2">{success}</p>}
    </form>
  );
};

export default RegisterForm;
