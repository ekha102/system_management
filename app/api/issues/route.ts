import { ValidationForm } from "@/app/validationForm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log('body', body);
  const validation = ValidationForm.safeParse(body);
  if (validation.error)
    return NextResponse.json(validation.error.format(), {status:400})

  const {issue_title, issue_desc} = body;
  const createIssue = await prisma.issue.create({
    data: {
      issue_title,
      issue_desc
    }
  });

  return NextResponse.json(createIssue, {status:201})

}