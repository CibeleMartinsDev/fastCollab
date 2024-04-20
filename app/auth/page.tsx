/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import OAuth from "../components/OAuthGoogle/OAuthGoogle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Auth() {
  return (
    <>   
      <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-black gap-10">
        <Image
          alt="gmail-logo"
          src="/gmail-logo.png"
          width={100}
          height={100}
        />
        <OAuth />
      </div>
    </>
  );
}
