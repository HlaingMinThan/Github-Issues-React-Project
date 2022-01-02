import React from 'react';
import './skeleton-element.css';
import Shimmer from 'react-shimmer-effect';
export default function SkeletonElement({ type }) {
  return (
    <Shimmer>
      <div className={`skeleton ${type}`}></div>
    </Shimmer>
  );
}
