
"use client"
import {
    NotificationList,
    PagePresence,
    Thread
  } from "@cord-sdk/react";
import { useContext } from "react";
import { AuthContext } from "../components/context/Context";
export default function Dashboard(){
    return (
       <div className="w-full h-[100vh] bg-black">
        <PagePresence groupId="FastCollabTestes"/>
        <Thread groupId="FastCollabTestes" threadId="FastCollabTestes"/>
       </div>
    )
}