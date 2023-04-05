import React from "react";
import PopiSpace from "./PopiSpace";

function PopiList() {
  return (
    <div className="PopiList">
      <PopiSpace name='343 Sansome' address='343 Sansome St.' image='01-0.jpg'/>
      <PopiSpace name='Empire Park' address='648 Commercial St.' image='02-0.jpg'/>
    </div>
  );
}

export default PopiList;
