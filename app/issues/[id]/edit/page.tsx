import IssueForm from '@/app/_components/IssueForm';
import { Issue } from '@/app/generated/prisma';
import { ValidationForm } from '@/app/ValidationForm';
import { prisma } from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react'
interface Props {
  params: {id: string}
}
const EditIssuePage = async ({params}: Props) => {
  // console.log('issue id:', params.id);
  if (isNaN(Number(params.id))) notFound();
  const issueDetails = await prisma.issue.findUnique({
    where: {issue_id: parseInt(params.id)}
  })
  if (!issueDetails) notFound();
  // console.log('issue Details:', issueDetails);
  return (
    <div>
      <IssueForm issueDetails={issueDetails} />
    </div>
  )
}

export default EditIssuePage;