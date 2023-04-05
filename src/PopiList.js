import React from "react";
import PopiSpace from "./PopiSpace";
import './PopiList.css';

function PopiList() {
  return (
    <div className="PopiList">
      <PopiSpace name='343 Sansome' address='343 Sansome St.' image='01-0.webp'/>
      <PopiSpace name='Empire Park' address='648 Commercial St.' image='02-0.webp'/>
      <PopiSpace name='Embarcadero Center' address='400-492 Commercial St.' image='03-0.webp'/>
      <PopiSpace name='150 California' address='150 California St.' image='04-0.webp'/>
      <PopiSpace name='150 California' address='150 California St.' image='04-0.webp'/>
      <PopiSpace name='Empire Park' address='648 Commercial St.' image='02-0.webp'/>
      <PopiSpace name='Embarcadero Center' address='400-492 Commercial St.' image='03-0.webp'/>
      <PopiSpace name='343 Sansome' address='343 Sansome St.' image='01-0.webp'/>

    </div>
  );
}

export default PopiList;
