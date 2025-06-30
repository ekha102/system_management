import { Flex, Badge } from '@radix-ui/themes'
import React from 'react'
import { Status } from '../generated/prisma'


interface Props {
  status: Status,
}


const IssueStatusBadge = ({status}: Props) => {

  const statusMap: Record<Status, {label: string, color: 'red'|'violet'|'green'}> = {
    OPEN: {label: 'Open', color: 'red'},
    IN_PROGRESS: {label: 'In Progress', color: 'violet'},
    CLOSED: {label: 'Closed', color: 'green'},
  }
  
  return (
    <Flex gap="2">
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </Flex>
  )
}

export default IssueStatusBadge