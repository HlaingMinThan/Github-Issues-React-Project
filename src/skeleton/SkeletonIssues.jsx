import React from 'react';
import SkeletonElement from './SkeletonElement';
import './skeleton-issues.css';
export default function SkeletonIssues() {
  return [1, 2, 3, 4, 5].map(() => (
    <div className="skeleton-wrapper">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  ));
}
