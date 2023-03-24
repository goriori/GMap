"use client";
import React from "react";
import "./navmenu.css";
import Search from "../search/search";
export default function Navmenu({ click }) {
  const menuSetting = [
    {
      id: 1,
      name: "Поставить отметку",
    },

    {
      id: 2,
      name: "Обновить карту",
    },
    {
      id: 3,
      name: "Вернуться к истокам",
    },
    {
      id: 4,
      name: "Закрыть карту",
    },
  ];

  const [menu, setMenu] = React.useState(menuSetting);

  const setEvent = (value) => {
    click(value.target.innerText);
  };
  return (
    <div className="navmenu">
      <Search />
      {menu.map((value) => (
        <div id="menu_item" key={value.id} onClick={setEvent}>
          {value.name}
        </div>
      ))}
    </div>
  );
}
