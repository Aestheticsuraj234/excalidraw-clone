"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {DropdownMenu , DropdownMenuTrigger , DropdownMenuContent , DropdownMenuItem , DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
interface ActionsProps{
    children:React.ReactNode;
    side?:DropdownMenuContentProps["side"];
    sideOffset?:DropdownMenuContentProps["sideOffset"];
    id:string;
    title:string;
}


export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title

}:ActionsProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}