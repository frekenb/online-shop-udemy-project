import React from "react";
import CategoryItem from "../category-item/category-item.component";

import "./categories.styles.scss";

const Categories = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category, id) => {
        return <CategoryItem category={category} key={id} />;
      })}
    </div>
  );
};

export default Categories;
