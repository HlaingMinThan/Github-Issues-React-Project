import React from 'react';
import SkeletonElement from './SkeletonElement';
import './skeleton-issues.css';
export default function SkeletonIssues() {
  return [1, 2, 3, 4, 5].map((item, i) => (
    <div className="skeleton-wrapper" key={item}>
      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
    </div>
  ));
}
