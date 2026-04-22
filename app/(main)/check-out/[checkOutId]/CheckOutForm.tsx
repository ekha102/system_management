import { ValidationCheckOutEdit } from "@/app/_components/ValidationCheckOutEdit";
import { Inventory } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

interface Props {
    checkOutDetail: Inventory | null,
}

type FormData = z.infer<typeof ValidationCheckOutEdit>;

const CheckOutForm = ({ checkOutDetail }: Props) => {
  // Create the form
  // Get the data from the form and validate it
  // Put the data to the api
  const { inv_id, product } = checkInItemDetails;
  const { prod_name } = product;
  
  const {register, control, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: zodResolver(ValidationCheckOutEdit),
    defaultValues: {
      inv_id,
      prod_name,
      invtran_change: 0,
      invtran_type: "PURCHASE",
      invtran_note: "",
    }
  });

  return (
    <>
      <form>

      </form>
    </>
  );
};
export default CheckOutForm;
