import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import IconClosed from '../components/IconClosed';
import IconOpened from '../components/IconOpened';
import CommentsIcon from '../components/CommentsIcon';
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
              <div key={issue.id} className="issues-entry">
                <div className="issues-entry-title-container">
                  <IconOpened />
                  <div className="issues-title">
                    <Link to={`/details/${issue.id}`}>{issue.title}</Link>
                    <div className="issues-title-details">
                      #{issue.number} opened 10 hours ago by {issue.user.login}
                    </div>
                  </div>
                </div>
                <a href="#" className="comments-count-container">
                  <CommentsIcon />
                  <div class="comments-count">{issue.comments}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
