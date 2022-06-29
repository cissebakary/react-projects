import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [catBtn, setCatBtn] = useState("breakfast");
  console.log(catBtn);
  return (
    <>
      <Categories items={items} catBtn={catBtn} setCatBtn={setCatBtn} />
      <Menu items={items} catBtn={catBtn} setCatBtn={setCatBtn} />
    </>
  );
}

export default App;
