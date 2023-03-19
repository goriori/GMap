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
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div className="container"> 
      <div ref={mapContainer} className="map-container" style={{marginRight:50}}></div>
      <Navmenu/>
    </div>
  );
}
