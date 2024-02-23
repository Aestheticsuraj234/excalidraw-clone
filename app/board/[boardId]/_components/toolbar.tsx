import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 ">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>pendcil</div>
        <div>eraser</div>
        <div>text</div>
        <div>shapes</div>
      </div>
      <div className="bg-white rounded-md p-1:5 flex flex-col items-center shadow-md">
        <div>undo</div>
        <div>redo</div>
      </div>
    </div>
  );
};

export default Toolbar;

export const  ToolbarSkeleton=()=> {
  return (
   <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]"/>
  );
}