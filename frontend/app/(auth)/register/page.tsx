import Container from "@/components/ui/container";
import React from "react";
import RegisterFrom from "../component/register-form";

export default function Register() {
  return (
    <main>
      <Container className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl mt-6 font-bold">Register To Continue</h1>
        <RegisterFrom />
      </Container>
    </main>
  );
}
