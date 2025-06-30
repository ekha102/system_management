
import { prisma } from '@/prisma/client'
import { Link, Table } from '@radix-ui/themes'
import React from 'react'
import IssueStatusBadge from './IssueStatusBadge';

const ViewIssues = async () => {
  const issues = await prisma.issue.findMany();
  // console.log(issues);

  return (
    <>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created Date</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.issue_id}>
              <Table.Cell><Link href={`/issues/${issue.issue_id}`} className='text-violet-600'>{issue.issue_title}</Link><div className='block md:hidden'><IssueStatusBadge status={issue.issue_status}/></div></Table.Cell>
              <Table.Cell className="hidden md:table-cell"><IssueStatusBadge status={issue.issue_status}/></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{issue.issue_create.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default ViewIssues