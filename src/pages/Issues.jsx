import React from 'react';
import { useQuery } from 'react-query';
import IconClosed from '../components/IconClosed';
import IconOpened from '../components/IconOpened';
import Issue from '../components/Issue';
export default function Issues() {
  async function fetchIssues() {
    return fetch(
      'https://api.github.com/repos/facebook/create-react-app/issues?per_page=10&state=open'
    )
      .then(result => {
        return result.json();
      })
      .catch(err => {
        return err;
      });
  }

  const {
    data: issues,
    isSuccess,
    isLoading,
  } = useQuery('issues', fetchIssues);
  return (
    <>
      {isLoading && <span>loading ...</span>}
      {isSuccess && (
        <div className="issues-container">
          <div className="issues-heading">
            <a href="#">facebook / create-react-app</a>
            <div className="open-closed-buttons">
              <button>
                <IconOpened />
                <span className="font-bold">96 Open</span>
              </button>
              <button>
                <IconClosed />
                <span className="">254 Closed</span>
              </button>
            </div>
          </div>
          <div className="issues-table">
            {issues.map(issue => (
              <Issue issue={issue}></Issue>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
