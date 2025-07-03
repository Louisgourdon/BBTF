import Container from "@/components/ui/container";
import React from "react";
import LoginForm from "../component/login-form";

export default function Login() {
  return (
    <main>
      <Container className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl mt-6 font-bold">Login To Continue</h1>
        <LoginForm />
      </Container>
    </main>
  );
}
