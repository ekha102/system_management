"use client"

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import delay from "delay";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const SearchProduct = () => {
  const router = useRouter();
  // This variable will hold the last value of the search input. It is used to check if the value has changed during the delay.
  const lastValueRef = useRef("");;  

  // This function is called when the user types in the search input. It updates the lastValue variable and waits for 1.5 seconds before checking if the value has changed. If the value has not changed, it navigates to the search results page with the search query as a parameter.
  // What is this do "e: React.ChangeEvent<HTMLInputElement>"? - This is a type annotation for the event object that is passed to the handleSearch function. It specifies that the event is a change event that occurs on an HTML input element. This allows us to access the value of the input element using e.target.value without TypeScript throwing an error.
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;  // Get the current value of the search input
    
    // Update the lastValue variable with the current value of the search input. This is important because we want to check if the value has changed during the delay.
    lastValueRef.current = value; 

    // await delay(1500); // ⏱️ 1.5 sec

    //  If the value has changed during the delay, we don't want to trigger the search. Also, if the value is empty, we don't want to trigger the search.
    if (value !== lastValueRef.current) return; 

    router.push(`/inventory?search=${value}&page=1`)
 };


  return (
    <TextField.Root my="4" placeholder="Search the docs…" onChange={handleSearch}>
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}
export default SearchProduct