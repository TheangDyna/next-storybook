"use client";
import React from "react";
// import LoginForm from "./components/organisms/form/LoginForm";
import Button from "./components/atoms/button/Button";

const Home: React.FC = ({}) => {
  return (
    <main className="flex gap-5 flex-wrap">
      <Button variant="containe" className="px-10 py-10 bg-red-300" >Button</Button>
      {/* <Button variant="outline" color="success">
        Button
      </Button> */}
    </main>
  );
};

export default Home;
