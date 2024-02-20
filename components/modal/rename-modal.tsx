"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogClose,
    DialogFooter,
    DialogHeader,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutations } from "@/hook/use-api-mutations";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";


export const RenameModal = ()=>{
    const {mutate , pending} = useApiMutations(api.board.update)
    const {isOpen , onClose , initialValues} = useRenameModal();
    const [title , setTitle] = useState(initialValues.title);

    useEffect(()=>{
        setTitle(initialValues.title);
    },[initialValues.title]);


    const onSubmit:FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        mutate({
            id:initialValues.id,
            title,
        })
        .then(()=>{
            toast.success("Board Renamed");
            onClose();
        })
        .catch(()=>{
            toast.error("Failed to rename board");
        })

    }

    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Board Title</DialogTitle>
                    <DialogDescription>
                        Enter a new title for the board
                    </DialogDescription>
                    <form onSubmit={onSubmit} className="space-y-4" >
                        <Input 
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder="Board Title"
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant={"outline"} >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button disabled={pending} type="submit" >
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )

}