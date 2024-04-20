/* eslint-disable @next/next/inline-script-id */
"use client";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AuthContext } from "../context/Context";
import { useRouter } from 'next/navigation'
export default function OAuth() {
  const { setCordToken } = useContext(AuthContext);
  const router = useRouter()
  const authAndRegisterOrAuthCordFirebase = (gCredential: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: gCredential,
      }),
    };
    fetch(process.env.NEXT_PUBLIC_LOCAL_SERVER_AUTH as string, options)
      .then(async (response) => {
        const result = await response.json();
        const startIndex = result.message.indexOf('ey'); 
        const cordToken = result.message.substring(startIndex);
        await setCordToken(cordToken as unknown as string)
        router.push('/dashboard')
      } )
      .catch((error) => console.log('Autenticação mal sucedida'));
  };
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        authAndRegisterOrAuthCordFirebase(credentialResponse.credential as string)
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
      auto_select={true}
    />
  );
}
