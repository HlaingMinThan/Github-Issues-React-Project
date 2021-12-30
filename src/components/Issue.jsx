import React from 'react';
import CommentsIcon from '../components/CommentsIcon';
import IconOpened from '../components/IconOpened';
import { Link } from 'react-router-dom';
export default function Issue({ issue }) {
  return (
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
  );
}
