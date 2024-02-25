"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks.config";

interface RoomProps{
    roomId:string;
    children:ReactNode;
    fallback:NonNullable<ReactNode | null>;
}


export const Room = ({children , roomId , fallback}:RoomProps)=>{
    return(
        <RoomProvider id={roomId} initialPresence={{
            cursor:null
        }} >
                <ClientSideSuspense fallback={fallback}>
                    {()=>children}
                </ClientSideSuspense>
        </RoomProvider>
    )
}