import React, { useState } from "react";

function CategoryFilter({ categories, filterCategories}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
    filterCategories(category)
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={category === selectedCategory ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;