"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutations } from "@/hook/use-api-mutations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const EmptyBoard = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const {mutate , pending} = useApiMutations(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled Board",
    })
    .then((id)=>{
      toast.success("Board Created Successfully");
      router.push(`/boards/${id}`)
      // TODO: redirect to the board/:id
    })
    .catch((error)=>{
      toast.error("Failed to create board");
    })
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board to manage your organization!
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
