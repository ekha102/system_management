import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, Flex, TextField, Button, Text } from '@radix-ui/themes'
import { register } from 'module'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ValidationLocationForm } from '../_components/ValidationLocationForm';
import { Resolver, useForm } from 'react-hook-form';
import axios from 'axios';
import { Location } from '../generated/prisma';


interface IFormInput {
  loc_name: string
  loc_desc: string
}



interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
  locIdDetail: Location;
}



const LocationForm = ({ open, setOpen, locIdDetail }: Props) => {


  const router = useRouter();
  console.log("Location Id Detail: ", locIdDetail);
  const { loc_id, loc_name, loc_desc } = locIdDetail || {}

  // const [isSubmiting, setIsSubmiting] = useState(false);


  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationLocationForm),
  });



  const onSubmit = async (values: IFormInput) => {
    // console.log(values);
    try {
      setOpen(false);
      if (loc_id) {
        await axios.put(`/api/locations/${loc_id}`, values)
      } else {
        await axios.post('/api/locations', values);
      }
      reset();
      router.refresh();


    } catch (error) {
      console.log(error);
    }



  }


  return (
    <>


      <Dialog.Content maxWidth="450px">

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="3">
            <label>
              <TextField.Root
                defaultValue={loc_name}
                placeholder="Enter location name"
                {...register("loc_name")}

              />
              {errors.loc_name && (
                <Text size="1" color="red">{errors.loc_name.message}</Text>
              )}
            </label>

            <label>
              <TextField.Root
                defaultValue={loc_desc}
                placeholder="Enter location description"
                {...register("loc_desc")}

              />
              {errors.loc_desc && (
                <Text size="1" color="red">{errors.loc_desc.message}</Text>
              )}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button
                type="button"
                variant="soft"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Dialog.Close>


            <Button type="submit">Submit</Button>


          </Flex>
        </form>
      </Dialog.Content>




    </>
  )
}

export default LocationForm;