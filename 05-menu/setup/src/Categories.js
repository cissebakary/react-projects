import React from "react";

const Categories = props => {
  // console.log(...props);
  const bbt = props.items;
  const setCatBtn = props.setCatBtn;
  // console.log(bbt);
  const cats = new Set(bbt.map(cat => cat.category));
  // console.log(cats);
  return (
    // <h1>hello </h1>
    <div className="btn-cat">
      {[...cats].map(cat => {
        return (
          <button
            className="btn-cat-child"
            onClick={e => setCatBtn(e.currentTarget.innerHTML)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
