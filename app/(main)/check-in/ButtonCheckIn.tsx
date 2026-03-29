import { Button } from "@radix-ui/themes"
import { useRouter } from "next/navigation";


interface Props {
  itemId: number,
}


const ButtonCheckIn = ({itemId}: Props) => {

  const router = useRouter();


  const handleCheckIn = (itemId: number) => {

    console.log("Testing Check In Item here", itemId)
    router.push(`/check-in/${itemId}`)
  }



  return (
    <Button color="blue" onClick={()=>handleCheckIn(itemId)}>Check In</Button>
  )
}
export default ButtonCheckIn