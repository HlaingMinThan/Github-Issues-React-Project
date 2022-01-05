import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import SkeletonIssueDetail from '../skeleton/SkeletonIssueDetail';
import CommentsSection from '../components/CommentsSection';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
export default function Details() {
  const { id } = useParams();
  async function fetchIssue({ queryKey }) {
    let id = queryKey[1];
    return fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${id}`
    ).then(response => response.json());
  }
  const {
    data: issue,
    isSuccess,
    isLoading,
  } = useQuery(['issue', id], fetchIssue);
  return (
    <>
      {isLoading && <SkeletonIssueDetail />}
      {isSuccess && (
        <div className="comments-container">
          <h2>
            {issue.title} <span>#{issue.number}</span>
          </h2>
          <div className="issue-details">
            <a href={issue.user.html_url}>{issue.user.login}</a> opened this
            issue {moment(issue.created_at).fromNow()}
          </div>

          <div className="comment-container">
            <a href={issue.user.html_url}>
              <img
                src={issue.user.avatar_url}
                alt="avatar"
                className="avatar"
              />
            </a>
            <div className="comment">
              <div className="comment-heading">
                <a href={issue.user.html_url}>{issue.user.login}</a> commented{' '}
                {moment(issue.created_at).fromNow()}
              </div>
              <div className="comment-body">
                <ReactMarkdown children={issue.body}></ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="border"></div>
          <CommentsSection
            issueNumber={issue.number}
            commentsCount={issue.comments}
          />
        </div>
      )}
    </>
  );
}
