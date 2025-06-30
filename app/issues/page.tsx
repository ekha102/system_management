
import CreateIssueAction from './CreateIssueAction';
import IssueStatusBadge from './IssueStatusBadge';
import ViewIssues from './ViewIssues';

const IssuesPage = () => {
  return (
    <>
      <CreateIssueAction/>
      <ViewIssues/>
      {/* <IssueStatusBadge/> */}
    </>
  )
}

export default IssuesPage;