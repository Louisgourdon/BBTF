"use client";

import { useCallback } from "react";
import { ErrorRes } from "../utils/type";
import toast from "react-hot-toast";

interface Muation {
  path: string;
  method: RequestInit["method"];
  credentials: RequestInit["credentials"];
  url?: string;
}

export default function useMutation<T>({
  path,
  method,
  credentials,
  url,
}: Muation) {
  const handleMutation = useCallback(
    async (
      body?: Record<string, unknown>,
      headers?: RequestInit["headers"]
    ) => {
      const data = await fetch(
        `${url ?? process.env.NEXT_PUBLIC_BACKEND_URL}${path}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",

            ...(headers ?? {}),
          },
          credentials: credentials,
          body: JSON.stringify(body),
        }
      );
      const res = (await data.json()) as ErrorRes;
      if ("error" in res) {
        toast.error(res.error);
        return;
      }
      return res as T;
    },
    [credentials, method, path, url]
  );
  return { handleMutation };
}
