import { Inventory } from "@prisma/client"
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  checkInItemDetails: Inventory | null
}

type FormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  username: z.string().min(2, "Username is too short"),
});

const CheckInFormItem = ({ checkInItemDetails }: Props) => {
  console.log("Check In Item Details in CheckInFormItem Component:", checkInItemDetails)

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
    },
  });


  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };


 
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        

          <Button type="submit">Submit</Button>
        </form>
      </Form>



    </>
  )
}
export default CheckInFormItem