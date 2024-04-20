"use client";

import { CordProvider } from "@cord-sdk/react";
import { NextUIProvider } from "@nextui-org/react";
import { AuthContext } from "../context/Context";
import Context from "../context/Context";
import { ReactNode, useContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
interface ProvidersProps {
  children: ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const [cordToken, setCordToken] = useState("");
  const getToken = (token: string) => {
    setCordToken(token as string);
  };
  return (
    <Context getToken={getToken}>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_ID_CLIENT_OAUTH_GOOGLE as string}
      >
        <CordProvider clientAuthToken={cordToken}>
          <NextUIProvider>{children}</NextUIProvider>
        </CordProvider>
      </GoogleOAuthProvider>
    </Context>
  );
}
