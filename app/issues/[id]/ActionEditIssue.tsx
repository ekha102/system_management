'use client'

import { Issue } from '@/app/generated/prisma'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface Props {
  issue: Issue
}


const ActionEditIssue = ({issue}: Props) => {
  // console.log('Issue in action edit:', issue);
  // const {issue_id} = issue;
  return (
    <>
      <Button><Link href={`/issues/${issue.issue_id}/edit`}>Edit Issue</Link></Button>
    </>
  )
}

export default ActionEditIssue