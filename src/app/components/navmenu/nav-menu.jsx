import React from "react";
import "./navmenu.css";
export default function Navmenu() {


  const menu = [
    {
      name: "Посмотреть карту",
    },
    {
      name: "Сделать отметку",
    },
    {
      name: "Найти путь",
    },
    {
      name: "Найти город",
    },
    {
      name: "Отметить друга",
    },
    {
      name: "Оставить сообщение",
    },
  ];


  return (
    <div className="navmenu">
      {menu.map((value, index)=> <div id="menu_item" key={index}>{value.name}</div>)}
    </div>
  );
}
