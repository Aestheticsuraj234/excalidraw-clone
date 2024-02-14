"use client";
import qs from "query-string";
import {Search, SearchIcon} from "lucide-react";
import {useDebounce} from "usehooks-ts";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";

import {
    ChangeEvent,
    useEffect,
    useState
} from "react";

export const SearchInput = ()=>{

    const router = useRouter();
    const [value , setValue] = useState<string>("");
    const debouncedValue = useDebounce(value, 500);

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }

    useEffect(()=>{
        
        const url = qs.stringifyUrl({
            url:"/",
            query:{
                search:debouncedValue,
            },
        },{skipEmptyString:true, skipNull:true});
        router.push(url);
    },[debouncedValue , router])

    return (
        <div className="w-full relative">
            <SearchIcon 
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <Input
            className="w-full max-w-[516px] pl-9"
            placeholder="Search Boards"
            onChange={handleChange}
            />
        </div>
    )
}