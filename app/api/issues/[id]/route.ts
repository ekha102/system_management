import { ValidationForm } from "@/app/ValidationForm";
import { prisma } from "@/prisma/client";
import delay from "delay";
import { NextRequest, NextResponse } from "next/server";


interface Props {
  params: {id: string}
}

export const PUT = async (request: NextRequest, {params}: Props) => {
  // await delay(5000)
  const body = await request.json();
  console.log('Body:', body);
  const validation = ValidationForm.safeParse(body);
  if (validation.error)
    return NextResponse.json(validation.error.format(), {status:400});

  const issueId = await prisma.issue.findUnique({
    where: {
      issue_id: parseInt(params.id),
    }
  })
  // console.log('Checking issue ID:', issueId);

  if (!issueId)
    return NextResponse.json({error: 'Invalid Issue'}, {status:404});

  const {issue_id, issue_title, issue_desc} = body;
  const updatedIssue = await prisma.issue.update({
    where: {issue_id: issueId.issue_id},
    data: {
      issue_title,
      issue_desc,
    }
  })
  
  return NextResponse.json(updatedIssue);
}



export const DELETE = async (request: NextRequest, {params}: Props) => {
  const issueId = await prisma.issue.findUnique({
    where: {issue_id: parseInt(params?.id)}
  })
  // console.log('Exist ID:', issueId);
  if (!issueId)
    return NextResponse.json({error: 'Invalid Issue'}, {status:404})
  
  await prisma.issue.delete({
    where: {issue_id: issueId.issue_id}
  });

  return NextResponse.json({});
}