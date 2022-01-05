import React from 'react';
import CommentsIcon from '../components/CommentsIcon';
import IconOpened from '../components/IconOpened';
import { Link } from 'react-router-dom';
import IconClosed from './IconClosed';
import moment from 'moment';

export default function Issue({ issue, filter }) {
  return (
    <div key={issue.id} className="issues-entry">
      <div className="issues-entry-title-container">
        {filter === 'open' && <IconOpened />}
        {filter === 'closed' && <IconClosed />}
        <div className="issues-title">
          <Link to={`/details/${issue.number}`}>{issue.title}</Link>
          <div className="issues-title-details">
            #{issue.number} opened {moment(issue.created_at).fromNow()} by{' '}
            {issue.user.login}
          </div>
        </div>
      </div>
      <Link
        to={`/details/${issue.number}`}
        className="comments-count-container"
      >
        <CommentsIcon />
        <div className="comments-count">{issue.comments}</div>
      </Link>
    </div>
  );
}
