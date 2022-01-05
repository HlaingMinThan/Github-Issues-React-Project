import React from 'react';
import './skeleton-element.css';
export default function SkeletonElement({ type }) {
  return <div className={`skeleton ${type}`}></div>;
}
