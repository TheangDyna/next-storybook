"use client";
import React from "react";
import LoginForm from "./components/organisms/form/LoginForm";
import Button from "./components/atoms/button/Button";

const Home: React.FC = ({}) => {
  return (
    <main>
      {/* <div className="flex flex-col gap-10">
        <LoginForm onSubmit={(loginFormData) => console.log(loginFormData)} />
      </div> */}
      <Button variant="outline" color="success" disabled>
        Button
      </Button>
    </main>
  );
};

export default Home;
