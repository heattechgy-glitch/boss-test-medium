import React from 'react';

const categoryColors = {
  Food: 'bg-green-500 text-green-100',
  Transport: 'bg-blue-500 text-blue-100',
  Bills: 'bg-orange-500 text-orange-100',
  Entertainment: 'bg-purple-500 text-purple-100',
  Other: 'bg-gray-500 text-gray-100',
};

const CategoryBadge = ({ category }) => {
  const colorClass = categoryColors[category] || categoryColors['Other'];
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${colorClass}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;