"use client";

import React, { useEffect, useState, useRef } from "react";
import "./map.css";
import mapboxgl from "mapbox-gl";
import Navmenu from "../navmenu/nav-menu";
export default function Map() {


  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ29yaW9yaSIsImEiOiJjbGVzbDh1ZWIxN3EzNDVvNTRmcGt6OG4yIn0.V-3GGHaLMs-ah_hwdbz6Hw";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(53.180020585360694);
  const [lat, setLat] = useState(56.83731232328776);
  const [zoom, setZoom] = useState(9);
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      doubleClickZoom: false,
      zoom: zoom,
    });
    const nav = new mapboxgl.NavigationControl({
      showCompass: false,
    });
    map.current.addControl(nav, "top-right");
  }, []);



  const loadMap = () => {
    if (!map.current) return;
    map.current.on("load", () => {
      console.log("loaded");
    });
  };
  loadMap();

  const testFunctionEmit = (resultClick) => {
    if (resultClick === "Поставить отметку") {
      map.current.on("click", (event) => {
        const { lng, lat } = event.lngLat;
        const marker = new mapboxgl.Marker({
          color: "#FFFFFF",
          draggable: true,
        })
          .setLngLat([lng, lat])
          .addTo(map.current);
        console.log([lng, lat]);
        return;
      });
    }
    if (resultClick === "Закрыть карту") {
      map.current.remove();
      console.log(mapContainer);
      setVisible(false)
      console.log("Closed map");
    }
    if (resultClick === "Обновить карту") {
      map.current.triggerRepaint();
      console.log("Карта обновлена");
    }
    if (resultClick === "Вернуться к истокам") {
      return map.current.setCenter([53.180020585360694, 56.83731232328776]);
    }
  };

  const increaseZoom = (event) => {
    setZoom(zoom + 1);
    console.log(zoom);
    map.current.setZoom(zoom);
  };

  const decreaseZoom = (event) => {
    setZoom(zoom - 1);
    console.log(zoom);
    map.current.setZoom(zoom);
  };


  
  return (
    <div className="container">
      {visible && (
        <div
          ref={mapContainer}
          className="map-container"
          style={{ marginRight: 50 }}
        ></div>
      )}
      <div className="editZoom">
        <p>Max zoom</p>
        <button onClick={increaseZoom}>+</button>
        <br />
        <button onClick={decreaseZoom}>-</button>
        <br />
      </div>

      <Navmenu click={testFunctionEmit} />
    </div>
  );
}
