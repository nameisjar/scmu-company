export const routeMapPlaces = {
  Merauke: { longitude: 140.4095, latitude: -8.5087, labelSide: "left" },
  Jakarta: { longitude: 106.8456, latitude: -6.2088, labelSide: "left" },
  Surabaya: { longitude: 112.7521, latitude: -7.2575, labelSide: "right" },
  Makassar: { longitude: 119.4327, latitude: -5.1477, labelSide: "right" },
  Pontianak: { longitude: 109.3307, latitude: -0.0263, labelSide: "left" },
  Medan: { longitude: 98.6722, latitude: 3.5952, labelSide: "right" },
  // Regional markers represent administrative seats, not regency boundaries.
  // BMKG: https://content.bmkg.go.id/wp-content/uploads/gbt_3_maret_2026.pdf (p. 44).
  "Boven Digoel": { longitude: 140.3068, latitude: -6.1033, labelSide: "right", seat: "Tanah Merah" },
  Mappi: { longitude: 139.3198, latitude: -6.535, labelSide: "left", seat: "Kepi" },
  Asmat: { longitude: 138.0673, latitude: -5.5143, labelSide: "left", seat: "Agats" },
} as const;

export type RouteMapPlace = keyof typeof routeMapPlaces;

export function projectRoutePlace(place: RouteMapPlace, regional: boolean) {
  const { longitude, latitude } = routeMapPlaces[place];
  return regional
    ? { x: (longitude - 135.7) * 90 + 120, y: (-latitude - 4.2) * 90 + 15 }
    : { x: (longitude - 94) * 17.5 + 20, y: (7 - latitude) * 17.5 + 35 };
}

export function routeConnectionPath(place: RouteMapPlace, regional: boolean, inbound: boolean) {
  const city = projectRoutePlace(place, regional);
  const hub = projectRoutePlace("Merauke", regional);
  const start = inbound ? city : hub;
  const end = inbound ? hub : city;
  const bend = Math.min(Math.abs(end.x - start.x) * .18, regional ? 45 : 110);
  return `M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${Math.min(start.y, end.y) - bend} ${end.x} ${end.y}`;
}
