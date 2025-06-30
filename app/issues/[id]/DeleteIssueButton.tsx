'use client'
import { Issue } from '@/app/generated/prisma'
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
  issue: Issue
}

const DeleteIssueButton = ({issue}: Props) => {
  // console.log('Display issue:', issue.issue_id);
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDelete = async (issue_id: number) => {
    try {
      await axios.delete('/api/issues/'+issue_id);
      setIsDeleting(true);
      router.push('/issues');
    } catch (error) {
      setIsDeleting(false);
      console.log(error);
    }
    
    // console.log('Issue ID', issue_id);
  }
  return (
    <Button color='red' disabled={isDeleting}
    onClick={()=>handleDelete(issue.issue_id)}
    >Delete</Button>
  )
}

export default DeleteIssueButton