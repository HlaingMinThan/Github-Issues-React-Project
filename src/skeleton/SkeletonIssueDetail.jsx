import React from 'react';
import SkeletonElement from './SkeletonElement';
export default function SkeletonIssueDetail() {
  return (
    <div className="skeleton-wrapper">
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  );
}
