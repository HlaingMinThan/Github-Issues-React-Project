import React from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import SkeletonElement from '../skeleton/SkeletonElement';
export default function Comments({ issueNumber, commentsCount }) {
  const {
    isLoading,
    isSuccess,
    data: comments,
  } = useQuery(['comments', issueNumber], fetchComments);

  async function fetchComments() {
    return fetch(
      `https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}/comments`
    ).then(response => response.json());
  }

  return (
    <>
      {isLoading && (
        <div className="skeleton-wrapper">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      )}
      {isSuccess &&
        comments.map(comment => (
          <div key={comment.id} className="comment-container">
            <a href={comment.user.html_url}>
              <img
                src={comment.user.avatar_url}
                alt="avatar"
                className="avatar"
              />
            </a>
            <div className="comment">
              <div className="comment-heading">
                <a href={comment.user.html_url}>{comment.user.login}</a>{' '}
                commented {moment(comment.created_at).fromNow()}
              </div>
              <div className="comment-body markdown-body">{comment.body}</div>
            </div>
          </div>
        ))}
    </>
  );
}
