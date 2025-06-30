'use client'
import { Box, Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const CreateIssueAction = () => {
  return (
    <Box className='pb-5'>
      <Button><Link href='/issues/new'>New Issue</Link></Button>
    </Box>
  )
}

export default CreateIssueAction