// 'use client';
import { Box, Button, Flex, Grid } from '@radix-ui/themes'
import DetailIssue from './DetailIssue';
import { notFound } from 'next/navigation'
import { prisma } from '@/prisma/client';
import ActionEditIssue from './ActionEditIssue';
import DeleteIssueButton from './DeleteIssueButton';

interface Props {
  params: { id: string }
}

const IssueDetails = async ({ params }: Props) => {
  if (isNaN(Number(params.id))) notFound();

  const issue = await prisma.issue.findUnique({
    where: { issue_id: parseInt(params.id) }
  })
  // console.log('Issue:', issue);

  if (!issue) notFound();

  return (
    <Grid columns='2' gap='2'>
      <Box>
        <DetailIssue issue={issue} />
      </Box>
      <Box>
        <Flex direction='column' gap='2'>
          {/* <Button>Edit Issue</Button> */}
          <ActionEditIssue issue={issue} />
          <DeleteIssueButton issue={issue}/>
        </Flex>

      </Box>

    </Grid>

  )
}

export default IssueDetails;