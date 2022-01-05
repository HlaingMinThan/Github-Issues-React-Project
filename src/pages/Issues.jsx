import React, { useState } from 'react';
import { useQuery } from 'react-query';
import IconClosed from '../components/IconClosed';
import IconOpened from '../components/IconOpened';
import Issue from '../components/Issue';
import SkeletonIssues from '../skeleton/SkeletonIssues';
export default function Issues() {
  const [filter, setFilter] = useState('open');
  async function fetchIssues({ queryKey }) {
    let filter = queryKey[1];
    return fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues?per_page=10&state=${filter}`
    )
      .then(result => {
        return result.json();
      })
      .catch(err => {
        return err;
      });
  }
  async function fetchIssuesOpen() {
    return fetch(
      `https://api.github.com/search/issues?q=repo:facebook/create-react-app+type:issue+state:open&per_page=1`
    ).then(response => response.json());
  }

  async function fetchIssuesClosed() {
    return fetch(
      `https://api.github.com/search/issues?q=repo:facebook/create-react-app+type:issue+state:closed&per_page=1`
    ).then(response => response.json());
  }

  const {
    data: issues,
    isSuccess,
    isLoading,
  } = useQuery(['issues', filter], fetchIssues);
  const { data: issuesOpen, isSuccess: isIssuesOpenSuccess } = useQuery(
    'issuesOpen',
    fetchIssuesOpen
  );
  const { data: issuesClosed, isSuccess: isIssuesClosedSuccess } = useQuery(
    'issuesClosed',
    fetchIssuesClosed
  );
  return (
    <>
      {isLoading && <SkeletonIssues />}
      {isSuccess && (
        <div className="issues-container">
          <div className="issues-heading">
            <a href="https://github.com/facebook/create-react-app">
              facebook / create-react-app
            </a>
            <div className="open-closed-buttons">
              <button onClick={() => setFilter('open')}>
                <IconOpened />
                <span className="font-bold">
                  {isIssuesOpenSuccess && issuesOpen.total_count} Open
                </span>
              </button>
              <button onClick={() => setFilter('closed')}>
                <IconClosed />
                <span className="">
                  {isIssuesClosedSuccess && issuesClosed.total_count} Closed
                </span>
              </button>
            </div>
          </div>
          <div className="issues-table">
            {issues.map(issue => (
              <Issue issue={issue} filter={filter} key={issue.id}></Issue>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
