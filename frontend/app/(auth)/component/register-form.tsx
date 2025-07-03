"use client";
import { Button } from "@/components/ui/button";
import Form from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMutation from "@/hooks/useMutations";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterFrom() {
  const [loading, setLoading] = useState(false);
  const { handleMutation } = useMutation<{ message: string }>({
    path: "/user/register",
    method: "POST",
    credentials: "include",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    setLoading(true);
    const res = await handleMutation(body);
    if (res?.message) {
      toast.success(res.message);
    }
    setLoading(false);
  };

  return (
    <Form className="!py-12 mt-8" onSubmit={handleSubmit}>
      <div className="w-full">
        <label htmlFor="name"></label>
        <Input
          placeholder="Your Name"
          type="text"
          name="name"
          className="!p-4"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="email"></label>
        <Input
          placeholder="Your Email"
          type="email"
          name="email"
          className="!p-4"
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="password"></label>
        <Input
          placeholder="Your Password"
          type="password"
          name="password"
          className="!p-4"
          required
        />
      </div>
      <Button className="block mx-auto cursor-pointer" disabled={loading}>
        Register
      </Button>
      <p className="text-center">
        Already have a accoun?{" "}
        <Link href={ROUTES.LOGIN} className="text-blue-600 font-medium">
          Login
        </Link>{" "}
      </p>
    </Form>
  );
}
