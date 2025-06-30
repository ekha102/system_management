'use client'

import { ValidationForm } from '@/app/ValidationForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Callout, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
// import SimpleMDE from "react-simplemde-editor";
import { z } from 'zod';
import { Issue } from '../generated/prisma';

const SimpleMDE = dynamic(
  () => import ('react-simplemde-editor'),
  {ssr: false}
);

// interface IssueForm {
//   issue_title: string,
//   issue_desc: string,
// }
interface Props {
  issueDetails?: Issue
}

type validationForm = z.infer<typeof ValidationForm>

const IssueForm = ({issueDetails}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log('Issue in create form:', issueDetails);
  const {issue_id, issue_title, issue_desc} = issueDetails || {};
  console.log(issue_id);
  const router = useRouter();
  const [isError, setIsError] = useState('');
  const { register, control, handleSubmit, formState: {errors} } = useForm<validationForm>({
    resolver: zodResolver(ValidationForm),
  });

  // console.log(register('issue_title'));
  const onSubmit = async (values: validationForm) => {
    // console.log('values:', values);
    try {
      setIsSubmitting(true);
      if (issue_id) {
        await axios.put(`/api/issues/${issue_id}`, values);
      } else {
        await axios.post('/api/issues', values);
      }
      
      router.push('/issues')
    } catch (error) {
      setIsSubmitting(false);
      setIsError('An unexpected error occured');
    }

  }
  return (
    <>
      <Heading>Create Issue</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction='column' gap='2' width='350px'>
          <Box>
            {isError &&
              <Callout.Root color='red'>
                <Callout.Text>{isError}</Callout.Text>
              </Callout.Root>
            }
          </Box>
          <Box>
            <TextField.Root placeholder='Title' defaultValue={issue_title} {...register('issue_title')} />
            {errors.issue_title && <Text color='red'>{errors.issue_title.message}</Text>}
          </Box>
          <Box>
            <Controller
              name='issue_desc'
              defaultValue={issue_desc}
              control={control}
              render={({ field }) => (<SimpleMDE placeholder='Description' {...field} />)}
            />
            {errors.issue_desc && <Text color='red'>{errors.issue_desc.message}</Text>}

          </Box>
          <Box>
            <Button disabled={isSubmitting}>{issue_id ? 'Update' : 'Submit'}</Button>
          </Box>
        </Flex>
      </form>




    </>
  )
}

export default IssueForm