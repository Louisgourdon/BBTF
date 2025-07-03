"use client";
import React, { Suspense } from "react";
import { ProgressLoader } from "nextjs-progressloader";

const ContextProvider = React.createContext({});

export default function Context({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider.Provider value={{}}>
      <Suspense>
        <ProgressLoader showSpinner={false} color="#0892a5" />
      </Suspense>
      {children}
    </ContextProvider.Provider>
  );
}
