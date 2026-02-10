'use client'

import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import delay from "delay"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef, useState } from "react"

interface BasicSearchProps {
  route: string
  queryKey?: string
  delayMs?: number
  placeholder?: string
}

const defaultSearchProps = {
  queryKey: "search",
  delayMs: 1500,
  placeholder: "Search..."
}


const BasicSearch = (props: BasicSearchProps) => {

  const {
    route,
    queryKey,
    delayMs,
    placeholder
  } = { ...defaultSearchProps, ...props }

  const router = useRouter()
  const searchParams = useSearchParams()

  const [value, setValue] = useState(searchParams.get(queryKey) || "")
  const lastValueRef = useRef(value)

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue);
    lastValueRef.current = newValue

    await delay(delayMs)

    // If user typed again during the delay → cancel this search
    if (lastValueRef.current !== newValue) return

    const params = new URLSearchParams(searchParams.toString())
    if (newValue) {
      params.set(queryKey, newValue)
      params.set("page", "1") // reset pagination on new search
    } else {
      params.delete(queryKey)
    }

    router.push(`${route}?${params.toString()}`)
  }

  return (
    <TextField.Root
      my="2"
      placeholder={placeholder}
      value={value}
      onChange={handleSearch}
    >
      <TextField.Slot>
        <MagnifyingGlassIcon height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}

export default BasicSearch
