"use client";

import { useId, useState } from "react";
import { company } from "@/data/company";
import { getRouteCoverage } from "@/data/routes";
import { projectRoutePlace, routeConnectionPath, routeMapPlaces, type RouteMapPlace } from "@/data/route-map";
import { routeMapGeography } from "@/data/route-map-geography";
import type { Locale } from "@/i18n/config";

export function RouteNetwork({ locale }: { locale: Locale }) {
  const content = getRouteCoverage(locale);
  const english = locale === "en";
  const [groupIndex, setGroupIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState<RouteMapPlace>("Jakarta");
  const [previewCity, setPreviewCity] = useState<RouteMapPlace | null>(null);
  const instanceId = useId();
  const group = content.groups[groupIndex];
  const regional = group.direction === "bidirectional";
  const inbound = group.direction === "inbound";
  const cities = group.cities;
  const highlightedCity = previewCity ?? selectedCity;
  const origin = inbound ? selectedCity : "Merauke";
  const destination = inbound ? "Merauke" : selectedCity;
  const connection = `${origin} ${regional ? "↔" : "→"} ${destination}`;
  const selectedPlace = routeMapPlaces[selectedCity];
  const message = english
    ? `Hello PT. SCMU, I would like to ask about shipping on the ${connection} route. Please share the available transport options and schedule.`
    : `Halo PT. SCMU, saya ingin menanyakan pengiriman untuk rute ${connection}. Mohon informasi pilihan moda dan jadwal yang tersedia.`;
  const whatsappHref = company.whatsapp
    ? `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
    : english ? "/en/kontak" : "/kontak";

  function selectGroup(index: number) {
    setGroupIndex(index);
    setSelectedCity(content.groups[index].cities[0]);
    setPreviewCity(null);
  }

  return (
    <div className="route-network">
      <div className="route-network__views" role="group" aria-label={english ? "Choose route coverage" : "Pilih cakupan rute"}>
        {content.groups.map((item, index) => (
          <button key={item.direction} type="button" aria-pressed={index === groupIndex} onClick={() => selectGroup(index)}>{item.title}</button>
        ))}
      </div>
      <div className="route-network__layout">
        <div className={`route-network__visual${regional ? " is-regional" : ""}`}>
          <div className="route-network__map">
            <svg viewBox="0 0 900 470" className="route-network__svg" aria-hidden="true" focusable="false">
              <defs>
                <pattern id={`${instanceId}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r=".8" fill="#cad5e2" opacity=".5" />
                </pattern>
                <marker id={`${instanceId}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#e30613" strokeWidth="1.8" />
                </marker>
              </defs>
              <rect width="900" height="470" fill={`url(#${instanceId}-dots)`} />
              <g transform={regional ? "translate(-12093 -363) scale(90)" : "translate(-1625 157.5) scale(17.5)"}>
                {routeMapGeography.map((country) => (
                  <path key={country.name} d={country.path} className={country.name === "IDN" ? "route-network__land" : "route-network__neighbor"} vectorEffect="non-scaling-stroke" />
                ))}
              </g>
              {cities.map((city) => (
                <path key={city} d={routeConnectionPath(city, regional, inbound)}
                  className={`route-network__connection${highlightedCity === city ? " is-highlighted" : ""}`}
                  markerEnd={highlightedCity === city ? `url(#${instanceId}-arrow)` : undefined}
                  markerStart={regional && highlightedCity === city ? `url(#${instanceId}-arrow)` : undefined} />
              ))}
              <text x={regional ? 510 : 726} y={regional ? 75 : 223} className="route-network__region-label">{regional ? "PAPUA SELATAN" : "PAPUA"}</text>
            </svg>
            {[...cities, "Merauke" as const].map((city) => {
              const point = projectRoutePlace(city, regional);
              const hub = city === "Merauke";
              return (
                <button key={city} type="button"
                  className={`route-network__point${hub ? " is-hub" : ""}${city === highlightedCity ? " is-selected" : ""}`}
                  style={{ left: `${point.x / 9}%`, top: `${point.y / 4.7}%` }}
                  aria-label={hub ? (english ? "Merauke, main connection point" : "Merauke, titik utama koneksi") : `${english ? "Select route" : "Pilih rute"}: ${inbound ? city : "Merauke"} ${regional ? "↔" : "→"} ${inbound ? "Merauke" : city}`}
                  aria-pressed={!hub && city === selectedCity}
                  onClick={() => { setSelectedCity(hub ? cities[0] : city); setPreviewCity(null); }}
                  onMouseEnter={() => { if (!hub) setPreviewCity(city); }}
                  onMouseLeave={() => setPreviewCity(null)}>
                  <span className="route-network__dot" />
                  <span className={`route-network__point-label route-network__point-label--${routeMapPlaces[city].labelSide}`}>{city}</span>
                </button>
              );
            })}
          </div>
          <div className="route-network__legend" aria-hidden="true">
            <span><i className="route-network__legend-hub" />Merauke</span>
            <span><i />{english ? "Connected destinations" : "Wilayah terhubung"}</span>
          </div>
          <p className="route-network__map-note">{english ? "Lines show service connections, not actual travel paths." : "Garis menunjukkan koneksi layanan, bukan lintasan perjalanan."}</p>
        </div>

        <aside className="route-network__details" aria-label={english ? "Route details" : "Detail rute"}>
          <p className="route-network__caption">{regional ? content.regionsLabel : inbound ? content.originsLabel : content.destinationsLabel}</p>
          <div className="route-network__cities" role="group" aria-label={english ? "Select a destination" : "Pilih wilayah"}>
            {cities.map((city) => <button key={city} type="button" aria-pressed={selectedCity === city} onClick={() => { setSelectedCity(city); setPreviewCity(null); }}>{city}</button>)}
          </div>
          <div className="route-network__summary" aria-live="polite" aria-atomic="true">
            <p>{group.title}</p>
            <h3>{origin}<span aria-hidden="true">{regional ? "↔" : "→"}</span>{destination}</h3>
            {regional && <p className="route-network__seat">{english ? "Regional marker" : "Titik wilayah"}: {"seat" in selectedPlace ? selectedPlace.seat : selectedCity}</p>}
          </div>
          <p className="route-network__availability">{content.note}</p>
          <a className="button route-network__cta" href={whatsappHref} target={company.whatsapp ? "_blank" : undefined} rel={company.whatsapp ? "noopener noreferrer" : undefined}>{english ? "Ask About This Route" : "Tanyakan Rute"}<span aria-hidden="true">↗</span></a>
        </aside>
      </div>
    </div>
  );
}
