import React from "react";
import "./navmenu.css";
import Search from "../search/search";
export default function Navmenu() {


  const menu = [
    {
      id:1,
      name: "Поставить отметку",
    },
    {
      id:2,
      name: "Сделать скрин",
    },
    {
      id:3,
      name: "Найти путь",
    },
    {
      id:4,
      name: "Найти город",
    },
    {
      id:5,
      name: "Отметить друга",
    },
    {
      id:6,
      name: "Оставить сообщение",
    },
  ];


  return (
    <div className="navmenu">
      <Search/>
      {menu.map(value=> <div id="menu_item" key={value.id}>{value.name}</div>)}
    </div>
  );
}
