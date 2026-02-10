'use client'

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import delay from "delay"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const SearchCheckInProduct = () => {
  const lastValueRef = useRef("");
  const router = useRouter();

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    const value = event.target.value;

    lastValueRef.current = value;

    await delay(1500); // ⏱️ 1.5 sec

    //  If the value has changed during the delay, we don't want to trigger the search. Also, if the value is empty, we don't want to trigger the search.
    if (value !== lastValueRef.current) return;


    router.push(`/check-in?searchCheckInProduct=${value}&page=1`);

  }

  return (
    <TextField.Root my="2" placeholder="Search the docs…" onChange={handleSearch}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}
export default SearchCheckInProduct