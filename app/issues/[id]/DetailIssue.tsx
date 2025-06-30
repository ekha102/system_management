import { Card, Heading, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from '../IssueStatusBadge'

import ReactMarkdown from 'react-markdown';
import { Issue } from '@/app/generated/prisma';


interface Props {
  issue: Issue
}

const DetailIssue = ({issue}: Props) => {
  
  return (
    <Card>
        <Heading as='h5'>{issue.issue_title}</Heading>
        <Flex gap='2'>
          <IssueStatusBadge status={issue.issue_status} />
          <Text>{issue.issue_create.toDateString()}</Text>
        </Flex>
        <ReactMarkdown>{issue.issue_desc}</ReactMarkdown>
      </Card>
  )
}

export default DetailIssue;