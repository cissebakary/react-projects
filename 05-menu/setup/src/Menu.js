import React, { useEffect } from "react";

const Menu = props => {
  const items = props.items;
  const catBtn = props.catBtn;
  // props.setCatBtn(false);
  // console.log(catBtn);
  return (
    <>
      <h2> menu items</h2>
      {items.filter(item => {
        if (item.category === catBtn) {
          return (
            <>
              <h4>{item.title}</h4>
            </>
          );
        } else {
          return <h2>hi</h2>;
        }
      })}
    </>
  );
};

export default Menu;
